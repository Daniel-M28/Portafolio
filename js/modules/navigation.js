(function () {
  'use strict';

  var Portfolio = (window.Portfolio = window.Portfolio || {});
  var BREAKPOINT = 768;

  var header = null;
  var toggle = null;
  var menu = null;
  var links = [];
  var initialized = false;

  function isDesktop() {
    return window.innerWidth >= BREAKPOINT;
  }

  function menuLabel(open) {
    var key = open ? 'nav.menu.close' : 'nav.menu.open';
    var fallback = open ? 'Cerrar menú' : 'Abrir menú';
    return Portfolio.i18n ? Portfolio.i18n.t(key) : fallback;
  }

  function setMenuOpen(open) {
    if (!menu || !toggle) return;
    menu.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', menuLabel(open));
  }

  function setActiveSection(id) {
    links.forEach(function (link) {
      if (link.getAttribute('href') === '#' + id) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }

  function observeSections() {
    var targets = links
      .map(function (link) {
        var href = link.getAttribute('href');
        if (!href || href.charAt(0) !== '#') return null;
        return document.querySelector(href);
      })
      .filter(Boolean);

    if (!targets.length) return;

    if (!('IntersectionObserver' in window)) {
      setActiveSection('inicio');
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    targets.forEach(function (target) {
      observer.observe(target);
    });
  }

  function updateHeaderState() {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  }

  function setYear() {
    var year = document.getElementById('year');
    if (year) year.textContent = String(new Date().getFullYear());
  }

  function init() {
    if (initialized) {
      updateHeaderState();
      return;
    }
    initialized = true;

    header = document.getElementById('site-header');
    toggle = document.getElementById('menu-toggle');
    menu = document.getElementById('nav-menu');
    links = Array.prototype.slice.call(document.querySelectorAll('[data-nav]'));

    if (toggle) {
      toggle.addEventListener('click', function () {
        setMenuOpen(!menu.classList.contains('open'));
      });
    }

    links.forEach(function (link) {
      link.addEventListener('click', function () {
        setMenuOpen(false);
      });
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && menu && menu.classList.contains('open')) {
        setMenuOpen(false);
        toggle.focus();
      }
    });

    window.addEventListener('resize', function () {
      if (isDesktop()) setMenuOpen(false);
    });

    window.addEventListener('scroll', updateHeaderState, { passive: true });

    if (Portfolio.i18n) {
      Portfolio.i18n.onApply(function () {
        setMenuOpen(menu.classList.contains('open'));
      });
    }

    setYear();
    updateHeaderState();
    observeSections();
  }

  Portfolio.navigation = {
    init: init
  };
})();
