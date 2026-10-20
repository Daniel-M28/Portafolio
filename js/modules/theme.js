(function () {
  'use strict';

  var Portfolio = (window.Portfolio = window.Portfolio || {});
  var STORAGE_KEY = 'theme';
  var toggle = document.getElementById('theme-toggle');
  var initialized = false;

  function storedTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (error) {
      return null;
    }
  }

  function prefersDark() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function current() {
    var stored = storedTheme();
    if (stored === 'light' || stored === 'dark') return stored;
    return prefersDark() ? 'dark' : 'light';
  }

  function translate(key, fallback) {
    return Portfolio.i18n ? Portfolio.i18n.t(key) : fallback;
  }

  function updateLabel(theme) {
    if (!toggle) return;
    var key = theme === 'dark' ? 'nav.theme.toLight' : 'nav.theme.toDark';
    var fallback = theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro';
    toggle.setAttribute('aria-label', translate(key, fallback));
  }

  function apply(theme) {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.style.colorScheme = theme;
    updateLabel(theme);
  }

  function set(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (error) {
      /* almacenamiento no disponible */
    }
    apply(theme);
  }

  function init() {
    if (initialized) {
      apply(current());
      return;
    }
    initialized = true;

    apply(current());

    if (toggle) {
      toggle.addEventListener('click', function () {
        set(current() === 'dark' ? 'light' : 'dark');
      });
    }

    var query = window.matchMedia('(prefers-color-scheme: dark)');
    var onSystemChange = function (event) {
      if (!storedTheme()) apply(event.matches ? 'dark' : 'light');
    };
    if (query.addEventListener) query.addEventListener('change', onSystemChange);
    else if (query.addListener) query.addListener(onSystemChange);

    if (Portfolio.i18n) {
      Portfolio.i18n.onApply(function () {
        updateLabel(current());
      });
    }
  }

  Portfolio.theme = {
    init: init,
    current: current,
    set: set
  };
})();
