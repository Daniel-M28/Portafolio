(function () {
  'use strict';

  var Portfolio = (window.Portfolio = window.Portfolio || {});

  var LIGHT_COLORS = ['#00b4d8', '#0077b6', '#48cae4'];
  var DARK_COLORS = ['#48cae4', '#6ba4f5', '#8fbdf8'];
  var LINK_COLOR_LIGHT = '0, 119, 182';
  var LINK_COLOR_DARK = '143, 189, 248';
  var MOBILE_BREAKPOINT = 768;
  var DENSITY_DIVISOR = 11000;
  var MOBILE_DENSITY_DIVISOR = 26000;
  var MIN_NODES = 40;
  var MOBILE_MIN_NODES = 26;
  var MAX_NODES_CAP = 180;
  var MOBILE_MAX_NODES_CAP = 70;
  var BASE_MAX_DIST = 110;
  var EXPANDED_MAX_DIST = 190;
  var LINK_WIDTH = 1;
  var NODE_RADIUS_MIN = 1.2;
  var NODE_RADIUS_MAX = 2.6;
  var LERP_FACTOR = 0.08;
  var DRIFT = 0.2;
  var LINK_ALPHA = 0.22;
  var MOUSE_RADIUS = 150;
  var MOUSE_LINK_DIST = 190;
  var MOUSE_LINK_ALPHA = 0.22;
  var MOUSE_PUSH = 3;

  var canvas = null;
  var host = null;
  var ctx = null;
  var nodes = [];
  var width = 0;
  var height = 0;
  var dpr = 1;
  var maxDist = BASE_MAX_DIST;
  var targetDist = BASE_MAX_DIST;
  var animationId = null;
  var reducedMotion = false;
  var isDark = false;
  var bgColor = '#ffffff';
  var linkColor = LINK_COLOR_LIGHT;
  var nodeColors = LIGHT_COLORS;
  var mouse = { x: -9999, y: -9999, active: false };

  function randomRange(min, max) {
    return min + Math.random() * (max - min);
  }

  function isMobile() {
    return window.innerWidth < MOBILE_BREAKPOINT;
  }

  function nodeCount() {
    var mobile = isMobile();
    var divisor = mobile ? MOBILE_DENSITY_DIVISOR : DENSITY_DIVISOR;
    var min = mobile ? MOBILE_MIN_NODES : MIN_NODES;
    var cap = mobile ? MOBILE_MAX_NODES_CAP : MAX_NODES_CAP;

    var count = Math.floor((width * height) / divisor);
    if (count < min) count = min;
    if (count > cap) count = cap;
    return count;
  }

  function readTheme() {
    var styles = window.getComputedStyle(document.documentElement);
    var paper = styles.getPropertyValue('--paper').trim();
    if (paper) bgColor = paper;
    isDark = document.documentElement.classList.contains('dark');
    nodeColors = isDark ? DARK_COLORS : LIGHT_COLORS;
    linkColor = isDark ? LINK_COLOR_DARK : LINK_COLOR_LIGHT;
  }

  function createNodes() {
    var count = nodeCount();
    nodes = [];
    for (var i = 0; i < count; i += 1) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: randomRange(-DRIFT, DRIFT),
        vy: randomRange(-DRIFT, DRIFT),
        radius: randomRange(NODE_RADIUS_MIN, NODE_RADIUS_MAX),
        colorIndex: Math.floor(Math.random() * nodeColors.length)
      });
    }
  }

  function resize() {
    dpr = window.devicePixelRatio || 1;
    readTheme();
    var rect = host.getBoundingClientRect();
    width = rect.width;
    height = rect.height;

    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    createNodes();
  }

  function scrollProgress() {
    if (!host) return 0;
    var rect = host.getBoundingClientRect();
    var top = host.offsetTop;
    var span = rect.height;
    if (span <= 0) return 0;
    var value = (window.scrollY - top) / span;
    if (value < 0) return 0;
    if (value > 1) return 1;
    return value;
  }

  function updateNodes() {
    nodes.forEach(function (node) {
      if (mouse.active) {
        var mdx = node.x - mouse.x;
        var mdy = node.y - mouse.y;
        var mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < MOUSE_RADIUS && mdist > 0.0001) {
          var push = (MOUSE_RADIUS - mdist) / MOUSE_RADIUS;
          node.x += (mdx / mdist) * push * MOUSE_PUSH;
          node.y += (mdy / mdist) * push * MOUSE_PUSH;
        }
      }

      node.x += node.vx;
      node.y += node.vy;

      if (node.x < 0) {
        node.x = 0;
        node.vx *= -1;
      } else if (node.x > width) {
        node.x = width;
        node.vx *= -1;
      }

      if (node.y < 0) {
        node.y = 0;
        node.vy *= -1;
      } else if (node.y > height) {
        node.y = height;
        node.vy *= -1;
      }
    });
  }

  function drawBackground() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, width, height);
  }

  function drawConnections() {
    var threshold = maxDist;
    var thresholdSq = threshold * threshold;

    for (var i = 0; i < nodes.length; i += 1) {
      var a = nodes[i];
      for (var j = i + 1; j < nodes.length; j += 1) {
        var b = nodes[j];
        var dx = a.x - b.x;
        var dy = a.y - b.y;
        var distSq = dx * dx + dy * dy;
        if (distSq >= thresholdSq) continue;

        var dist = Math.sqrt(distSq);
        var alpha = 1 - dist / threshold;
        ctx.strokeStyle = 'rgba(' + linkColor + ', ' + (alpha * LINK_ALPHA).toFixed(3) + ')';
        ctx.lineWidth = LINK_WIDTH;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }
  }

  function drawNodes() {
    nodes.forEach(function (node) {
      ctx.beginPath();
      ctx.fillStyle = nodeColors[node.colorIndex];
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  function drawMouseLinks() {
    if (!mouse.active) return;

    nodes.forEach(function (node) {
      var dx = node.x - mouse.x;
      var dy = node.y - mouse.y;
      var distSq = dx * dx + dy * dy;
      if (distSq >= MOUSE_LINK_DIST * MOUSE_LINK_DIST) return;

      var dist = Math.sqrt(distSq);
      var alpha = 1 - dist / MOUSE_LINK_DIST;
      ctx.strokeStyle = 'rgba(' + linkColor + ', ' + (alpha * MOUSE_LINK_ALPHA).toFixed(3) + ')';
      ctx.lineWidth = LINK_WIDTH;
      ctx.beginPath();
      ctx.moveTo(node.x, node.y);
      ctx.lineTo(mouse.x, mouse.y);
      ctx.stroke();
    });

    ctx.beginPath();
    ctx.fillStyle = 'rgba(' + linkColor + ', 0.25)';
    ctx.arc(mouse.x, mouse.y, 2.4, 0, Math.PI * 2);
    ctx.fill();
  }

  function frame() {
    targetDist = BASE_MAX_DIST +
      (EXPANDED_MAX_DIST - BASE_MAX_DIST) * scrollProgress();
    maxDist += (targetDist - maxDist) * LERP_FACTOR;

    drawBackground();
    updateNodes();
    drawConnections();
    drawMouseLinks();
    drawNodes();

    animationId = window.requestAnimationFrame(frame);
  }

  function onMouseMove(event) {
    if (!host) return;
    var rect = host.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    var inside = x >= 0 && x <= rect.width && y >= 0 && y <= rect.height;
    mouse.active = inside;
    mouse.x = inside ? x : -9999;
    mouse.y = inside ? y : -9999;
  }

  function onMouseLeave() {
    mouse.active = false;
    mouse.x = -9999;
    mouse.y = -9999;
  }

  function acquireCanvas() {
    return document.getElementById('bg-canvas');
  }

  function watchTheme() {
    if (!('MutationObserver' in window)) return;
    var observer = new MutationObserver(function () {
      var wasDark = isDark;
      readTheme();
      if (wasDark !== isDark) {
        nodes.forEach(function (node) {
          node.colorIndex = Math.floor(Math.random() * nodeColors.length);
        });
      }
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    var query = window.matchMedia('(prefers-color-scheme: dark)');
    var onSystemChange = function () {
      var wasDark = isDark;
      readTheme();
      if (wasDark !== isDark) {
        nodes.forEach(function (node) {
          node.colorIndex = Math.floor(Math.random() * nodeColors.length);
        });
      }
    };
    if (query.addEventListener) query.addEventListener('change', onSystemChange);
    else if (query.addListener) query.addListener(onSystemChange);
  }

  function init() {
    canvas = acquireCanvas();
    if (!canvas || !canvas.getContext) return;

    host = canvas.closest('.hero-canvas-host') || canvas.parentElement;
    if (!host) return;

    ctx = canvas.getContext('2d');
    if (!ctx) return;

    reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    resize();
    watchTheme();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);

    if ('ResizeObserver' in window) {
      new ResizeObserver(resize).observe(host);
    }

    if (animationId === null) frame();
  }

  Portfolio.plexus = {
    init: init
  };
})();
