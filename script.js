(function () {
  'use strict';

  var Portfolio = window.Portfolio;

  function safeInit(name) {
    try {
      if (Portfolio[name] && Portfolio[name].init) Portfolio[name].init();
    } catch (error) {
      console.error('Error inicializando ' + name, error);
    }
  }

  function init() {
    if (!Portfolio) return;

    safeInit('theme');
    safeInit('navigation');
    safeInit('projectsView');
    safeInit('plexus');

    /* Se aplica al final: dispara el renderizado con las traducciones
       centralizadas de los componentes registrados. */
    safeInit('i18n');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
