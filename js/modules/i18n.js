(function () {
  'use strict';

  var Portfolio = (window.Portfolio = window.Portfolio || {});
  var STORAGE_KEY = 'lang';
  var DEFAULT_LANG = 'es';
  var SUPPORTED = ['es', 'en'];

  var callbacks = [];
  var currentLang = DEFAULT_LANG;
  var toggle = null;
  var menu = null;
  var options = [];
  var initialized = false;

  function storedLang() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (error) {
      return null;
    }
  }

  function detectLang() {
    var stored = storedLang();
    if (SUPPORTED.indexOf(stored) !== -1) return stored;
    return DEFAULT_LANG;
  }

  function t(key) {
    var dictionary = Portfolio.translations[currentLang] || {};
    var fallback = Portfolio.translations[DEFAULT_LANG] || {};
    if (Object.prototype.hasOwnProperty.call(dictionary, key)) return dictionary[key];
    if (Object.prototype.hasOwnProperty.call(fallback, key)) return fallback[key];
    return key;
  }

  function applyAttributes() {
    document.querySelectorAll('[data-i18n]').forEach(function (element) {
      element.textContent = t(element.getAttribute('data-i18n'));
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(function (element) {
      element.getAttribute('data-i18n-attr').split(',').forEach(function (pair) {
        var separator = pair.indexOf(':');
        if (separator === -1) return;
        var attribute = pair.slice(0, separator).trim();
        var key = pair.slice(separator + 1).trim();
        if (attribute && key) element.setAttribute(attribute, t(key));
      });
    });
  }

  function updateLanguageControls() {
    options.forEach(function (option) {
      option.setAttribute('aria-selected', String(option.dataset.lang === currentLang));
    });
    if (toggle) toggle.setAttribute('aria-label', t('nav.lang'));
  }

  function apply() {
    document.documentElement.lang = currentLang;
    document.title = t('meta.title');
    applyAttributes();
    updateLanguageControls();
    callbacks.forEach(function (callback) {
      callback(currentLang, t);
    });
  }

  function set(lang) {
    if (SUPPORTED.indexOf(lang) === -1 || lang === currentLang) return;
    currentLang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (error) {
      /* almacenamiento no disponible */
    }
    apply();
  }

  function openMenu() {
    if (!menu || !toggle) return;
    menu.hidden = false;
    toggle.setAttribute('aria-expanded', 'true');
    var selected = options.filter(function (option) {
      return option.dataset.lang === currentLang;
    })[0];
    (selected || options[0]).focus();
  }

  function closeMenu() {
    if (!menu || !toggle) return;
    menu.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
  }

  function bindControls() {
    if (!toggle || !menu) return;

    toggle.addEventListener('click', function () {
      if (menu.hidden) openMenu();
      else closeMenu();
    });

    menu.addEventListener('click', function (event) {
      var option = event.target.closest('[data-lang]');
      if (!option) return;
      set(option.dataset.lang);
      closeMenu();
      toggle.focus();
    });

    menu.addEventListener('keydown', function (event) {
      if (event.key !== 'Escape') return;
      closeMenu();
      toggle.focus();
    });

    document.addEventListener('click', function (event) {
      if (!menu.hidden && !event.target.closest('.lang')) closeMenu();
    });
  }

  function init() {
    if (initialized) {
      apply();
      return;
    }
    initialized = true;

    toggle = document.getElementById('lang-toggle');
    menu = document.getElementById('lang-menu');
    options = Array.prototype.slice.call(document.querySelectorAll('[data-lang]'));

    currentLang = detectLang();
    bindControls();
    apply();
  }

  Portfolio.i18n = {
    init: init,
    apply: apply,
    set: set,
    t: t,
    getLanguage: function () {
      return currentLang;
    },
    onApply: function (callback) {
      callbacks.push(callback);
    }
  };
})();
