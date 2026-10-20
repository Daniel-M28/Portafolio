(function () {
  'use strict';

  var Portfolio = (window.Portfolio = window.Portfolio || {});

  var ESCAPES = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };

  function escapeHtml(value) {
    return String(value === null || value === undefined ? '' : value).replace(/[&<>"']/g, function (character) {
      return ESCAPES[character];
    });
  }

  function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  Portfolio.util = {
    escapeHtml: escapeHtml,
    prefersReducedMotion: prefersReducedMotion
  };
})();
