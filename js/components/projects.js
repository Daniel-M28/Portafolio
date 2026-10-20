(function () {
  'use strict';

  var Portfolio = (window.Portfolio = window.Portfolio || {});
  var escapeHtml = function (value) {
    return Portfolio.util.escapeHtml(value);
  };

  var state = {
    category: 'no-ai',
    openId: null
  };

  var elements = {
    tabs: [],
    tablist: null,
    panel: null,
    list: null,
    detail: null
  };

  function lang() {
    return Portfolio.i18n.getLanguage();
  }

  function t(key) {
    return Portfolio.i18n.t(key);
  }

  function localized(value) {
    if (!value) return '';
    return value[lang()] || value.es || value.en || '';
  }

  function findProject(id) {
    return Portfolio.projects.filter(function (project) {
      return project.id === id;
    })[0];
  }

  function pending() {
    return '<p class="pending">' + escapeHtml(t('projects.pending')) + '</p>';
  }

  function detailBlock(key, body, wide) {
    return (
      '<div class="detail-block' + (wide ? ' detail-block-wide' : '') + '">' +
      '<h4>' + escapeHtml(t(key)) + '</h4>' +
      body +
      '</div>'
    );
  }

  function listBody(value) {
    if (Array.isArray(value)) {
      if (!value.length) return pending();
      return '<ul>' + value.map(function (item) {
        return '<li>' + escapeHtml(item) + '</li>';
      }).join('') + '</ul>';
    }
    return value ? '<p>' + escapeHtml(value) + '</p>' : pending();
  }

  function projectCard(project) {
    var name = localized(project.name);
    var image = project.images[0];

    var tags = project.tech.map(function (tech) {
      return Portfolio.tech.chip(tech, true);
    }).join('');

    return (
      '<article class="project">' +
      '<div class="project-media">' +
      '<img src="' + escapeHtml(image.src) + '" alt="' + escapeHtml(localized(image.alt)) + '" loading="lazy" decoding="async" width="640" height="400">' +
      '<span class="project-cue">' + escapeHtml(t('projects.details')) + '</span>' +
      '</div>' +
      '<div class="project-body">' +
      '<h3 class="project-name">' + escapeHtml(name) + '</h3>' +
      '<p class="project-summary">' + escapeHtml(localized(project.summary)) + '</p>' +
      '<ul class="project-tags">' + tags + '</ul>' +
      '<div class="project-actions">' +
      '<a class="btn btn-primary" href="proyectos/detalle.html?id=' + encodeURIComponent(project.id) + '">' +
      escapeHtml(t('projects.details')) +
      '</a>' +
      '</div>' +
      '</div>' +
      '</article>'
    );
  }

  function renderList() {
    var projects = Portfolio.projects.filter(function (project) {
      return project.category === state.category;
    });

    if (!projects.length) {
      elements.list.innerHTML =
        '<div class="empty-state">' +
        '<h3>' + escapeHtml(t('projects.empty.title')) + '</h3>' +
        '<p>' + escapeHtml(t('projects.empty.body')) + '</p>' +
        '</div>';
      return;
    }

    elements.list.innerHTML = projects.map(projectCard).join('');
  }

  function renderDetail(project) {
    var name = localized(project.name);

    var thumbs = project.images.map(function (image, index) {
      return (
        '<li>' +
        '<button class="detail-thumb" type="button" data-image-index="' + index + '"' +
        (index === 0 ? ' aria-current="true"' : '') + '>' +
        '<img src="' + escapeHtml(image.src) + '" alt="' + escapeHtml(localized(image.alt)) + '" loading="lazy" decoding="async" width="96" height="60">' +
        '</button>' +
        '</li>'
      );
    }).join('');

    var links = [];
    if (project.repository) {
      links.push('<a class="btn btn-ghost" href="' + escapeHtml(project.repository) + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(t('projects.repo')) + '</a>');
    }
    if (project.demo) {
      links.push('<a class="btn btn-primary" href="' + escapeHtml(project.demo) + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(t('projects.demo')) + '</a>');
    }

    elements.detail.innerHTML =
      '<button class="btn btn-ghost detail-back" type="button" data-detail-back>' +
      escapeHtml(t('projects.back')) +
      '</button>' +
      '<article>' +
      '<h3 class="detail-title" id="project-detail-title" tabindex="-1">' + escapeHtml(name) + '</h3>' +
      '<p class="detail-summary">' + escapeHtml(localized(project.summary)) + '</p>' +
      '<div class="detail-gallery">' +
      '<img class="detail-main-image" id="detail-main-image" src="' + escapeHtml(project.images[0].src) + '" alt="' + escapeHtml(localized(project.images[0].alt)) + '" decoding="async" width="960" height="600">' +
      '<ul class="detail-thumbs">' + thumbs + '</ul>' +
      '</div>' +
      '<div class="detail-content">' +
      detailBlock('projects.field.description', listBody(localized(project.description)), false) +
      detailBlock('projects.field.objective', listBody(localized(project.objective)), false) +
      detailBlock('projects.field.features', listBody(project.features[lang()]), false) +
      detailBlock('projects.field.architecture', listBody(localized(project.architecture)), false) +
      detailBlock('projects.field.highlights', listBody(project.highlights[lang()]), false) +
      detailBlock('projects.field.challenges', listBody(project.challenges[lang()]), false) +
      detailBlock('projects.tech', '<ul class="project-tags">' + project.tech.map(function (tech) {
        return Portfolio.tech.chip(tech, false);
      }).join('') + '</ul>', true) +
      detailBlock('projects.links', links.length ? '<div class="detail-links">' + links.join('') + '</div>' : pending(), true) +
      '</div>' +
      '</article>';

    bindGallery(project);
  }

  function bindGallery(project) {
    var mainImage = elements.detail.querySelector('#detail-main-image');
    if (!mainImage) return;

    elements.detail.querySelectorAll('[data-image-index]').forEach(function (thumb) {
      thumb.addEventListener('click', function () {
        var index = Number(thumb.getAttribute('data-image-index'));
        var image = project.images[index];

        mainImage.src = image.src;
        mainImage.alt = localized(image.alt);

        elements.detail.querySelectorAll('[data-image-index]').forEach(function (item) {
          item.removeAttribute('aria-current');
        });
        thumb.setAttribute('aria-current', 'true');
      });
    });
  }

  function render(focusDetail) {
    var project = state.openId ? findProject(state.openId) : null;

    if (project) {
      elements.panel.hidden = true;
      elements.detail.hidden = false;
      renderDetail(project);

      if (focusDetail) {
        var heading = elements.detail.querySelector('.detail-title');
        if (heading) heading.focus({ preventScroll: true });
        elements.detail.scrollIntoView({
          block: 'start',
          behavior: Portfolio.util.prefersReducedMotion() ? 'auto' : 'smooth'
        });
      }
      return;
    }

    elements.detail.hidden = true;
    elements.detail.innerHTML = '';
    elements.panel.hidden = false;
    renderList();
  }

  function openProject(id) {
    window.location.href = 'proyectos/detalle.html?id=' + encodeURIComponent(id);
  }

  function closeDetail() {
    state.openId = null;
    render(false);
  }

  function selectCategory(category, focusTab) {
    state.category = category;

    elements.tabs.forEach(function (tab) {
      var selected = tab.dataset.category === category;
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
      if (selected) {
        elements.panel.setAttribute('aria-labelledby', tab.id);
        if (focusTab) tab.focus();
      }
    });

    closeDetail();
  }

  function onTablistKeydown(event) {
    var keys = ['ArrowLeft', 'ArrowRight', 'Home', 'End'];
    if (keys.indexOf(event.key) === -1) return;
    event.preventDefault();

    var current = elements.tabs.indexOf(document.activeElement);
    var last = elements.tabs.length - 1;

    if (event.key === 'Home') {
      elements.tabs[0].focus();
    } else if (event.key === 'End') {
      elements.tabs[last].focus();
    } else {
      var offset = event.key === 'ArrowRight' ? 1 : -1;
      var base = current < 0 ? 0 : current;
      elements.tabs[(base + offset + elements.tabs.length) % elements.tabs.length].focus();
    }

    var focused = elements.tabs.filter(function (tab) {
      return tab === document.activeElement;
    })[0];
    if (focused) selectCategory(focused.dataset.category, false);
  }

  function init() {
    elements.tablist = document.querySelector('[role="tablist"]');
    elements.tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
    elements.panel = document.getElementById('projects-panel');
    elements.list = document.getElementById('project-list');
    elements.detail = document.getElementById('project-detail');

    if (!elements.tablist || !elements.list || !elements.detail) return;

    elements.tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        selectCategory(tab.dataset.category, false);
      });
    });
    elements.tablist.addEventListener('keydown', onTablistKeydown);

    // Los detalles se abren en una nueva página, por lo que no se requiere abrir el detalle inline
    if (elements.detail) {
      elements.detail.addEventListener('click', function (event) {
        if (event.target.closest('[data-detail-back]')) closeDetail();
      });
    }

    Portfolio.i18n.onApply(function () {
      render();
    });
  }

  Portfolio.projectsView = {
    init: init
  };
})();
