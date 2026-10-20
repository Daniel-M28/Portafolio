(function () {
  'use strict';

  var Portfolio = (window.Portfolio = window.Portfolio || {});
  var escapeHtml = function (value) {
    return Portfolio.util.escapeHtml(value);
  };

  var SHAPES = {
    square: function () {
      return '<rect x="3" y="3" width="32" height="32" rx="3"></rect>';
    },
    hex: function () {
      return '<polygon points="19,2 34,10.5 34,27.5 19,36 4,27.5 4,10.5"></polygon>';
    },
    cylinder: function () {
      return (
        '<ellipse cx="19" cy="10" rx="13" ry="6"></ellipse>' +
        '<path d="M6 10 V28 M32 10 V28 M6 28 A13 6 0 0 0 32 28"></path>'
      );
    },
    shield: function () {
      return '<path d="M19 2.5 L34 8 V18.5 C34 27 27.5 33 19 35.5 C10.5 33 4 27 4 18.5 V8 Z"></path>';
    },
    spark: function () {
      return '<path d="M19 2 L22.4 15.6 L36 19 L22.4 22.4 L19 36 L15.6 22.4 L2 19 L15.6 15.6 Z"></path>';
    },
    circle: function () {
      return '<circle cx="19" cy="19" r="16"></circle>';
    }
  };

  function badge(shape, mono, size) {
    var render = SHAPES[shape] || SHAPES.square;
    var dimension = size || 38;
    return (
      '<svg viewBox="0 0 38 38" width="' + dimension + '" height="' + dimension + '" aria-hidden="true" focusable="false">' +
      '<g fill="none" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round">' +
      render() +
      '</g>' +
      '<text x="19" y="19.5" text-anchor="middle" dominant-baseline="central">' +
      escapeHtml(mono) +
      '</text></svg>'
    );
  }

  function assetBase() {
    return document.getElementById('project-detail-page') ? '../assets/tech/' : 'assets/tech/';
  }

  function imageBadge(icon, isMono, size) {
    var dimension = size || 38;
    return (
      '<img class="tech-icon' + (isMono ? ' tech-icon-mono' : '') + '"' +
      ' src="' + escapeHtml(assetBase() + icon) + '"' +
      ' alt="" width="' + dimension + '" height="' + dimension + '"' +
      ' loading="lazy" decoding="async" focusable="false">'
    );
  }

  function findTech(name) {
    var found = null;
    (Portfolio.technologies || []).forEach(function (category) {
      category.items.forEach(function (item) {
        if (item.name === name) found = { shape: category.shape, mono: item.mono, icon: item.icon, monoIcon: item.monoIcon };
      });
    });
    return found || { shape: 'square', mono: String(name).slice(0, 4) };
  }

  function badgeFor(name) {
    var tech = findTech(name);
    if (tech.icon) return imageBadge(tech.icon, tech.monoIcon);
    return badge(tech.shape, tech.mono);
  }

  function techChip(name, small) {
    return (
      '<li class="tech-item' + (small ? ' tech-item-sm' : '') + '">' +
      '<span class="tech-badge" aria-hidden="true">' + badgeFor(name) + '</span>' +
      '<span class="tech-name">' + escapeHtml(name) + '</span>' +
      '</li>'
    );
  }

  function renderCategories() {
    var container = document.getElementById('tech-categories');
    if (!container || !Portfolio.i18n) return;

    var t = Portfolio.i18n.t;
    container.innerHTML = Portfolio.technologies
      .map(function (category) {
        var headingId = 'tech-' + category.id;
        var items = category.items
          .map(function (item) {
            var iconHtml = item.icon
              ? imageBadge(item.icon, item.monoIcon)
              : badge(category.shape, item.mono);
            return (
              '<li class="tech-item">' +
              '<span class="tech-badge" aria-hidden="true">' + iconHtml + '</span>' +
              '<span class="tech-name">' + escapeHtml(item.name) + '</span>' +
              '</li>'
            );
          })
          .join('');

        return (
          '<section class="tech-category" aria-labelledby="' + headingId + '">' +
          '<h3 class="tech-category-title" id="' + headingId + '">' + escapeHtml(t(category.labelKey)) + '</h3>' +
          '<ul class="tech-grid">' + items + '</ul>' +
          '</section>'
        );
      })
      .join('');
  }

  Portfolio.tech = {
    render: renderCategories,
    badgeFor: badgeFor,
    chip: techChip
  };

  if (Portfolio.i18n) Portfolio.i18n.onApply(renderCategories);
})();
