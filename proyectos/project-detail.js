(function () {
  'use strict';

  var Portfolio = (window.Portfolio = window.Portfolio || {});
  var escapeHtml = function (value) {
    return Portfolio.util.escapeHtml(value);
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

  function getProjectId() {
    var params = new URLSearchParams(window.location.search);
    return params.get('id');
  }

  function findProject(id) {
    if (!Portfolio.projects) return null;
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

  function render() {
    var container = document.getElementById('project-detail-page');
    if (!container) return;

    var id = getProjectId();
    var project = id ? findProject(id) : null;

    if (!project) {
      container.innerHTML =
        '<div class="empty-state">' +
        '<h3>' + escapeHtml(t('projects.empty.title')) + '</h3>' +
        '<p>' + escapeHtml(t('projects.empty.body')) + '</p>' +
        '</div>';
      return;
    }

    var name = localized(project.name);
    var titleEl = document.getElementById('project-page-title');
    var descEl = document.getElementById('project-page-description');
    var portfolioLabel = lang() === 'en' ? 'Portfolio' : 'Portafolio';
    var pageTitle = name + ' — ' + portfolioLabel;
    if (titleEl) titleEl.textContent = pageTitle;
    document.title = pageTitle;

    var summaryText = localized(project.summary);
    if (descEl && summaryText) {
      descEl.setAttribute('content', summaryText);
    }

    var thumbs = project.images.map(function (image, index) {
      return (
        '<li>' +
        '<button class="detail-thumb" type="button" data-image-index="' + index + '"' +
        (index === 0 ? ' aria-current="true"' : '') + '>' +
        '<img src="../' + escapeHtml(image.src) + '" alt="' + escapeHtml(localized(image.alt)) + '" loading="lazy" decoding="async" width="96" height="60">' +
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

    container.innerHTML =
      '<h1 class="detail-title" id="project-detail-title" tabindex="-1">' + escapeHtml(name) + '</h1>' +
      '<p class="detail-summary">' + escapeHtml(summaryText) + '</p>' +
      '<div class="detail-gallery">' +
      '<img class="detail-main-image" id="detail-main-image" src="../' + escapeHtml(project.images[0].src) + '" alt="' + escapeHtml(localized(project.images[0].alt)) + '" decoding="async">' +
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
      '</div>';

    bindGallery(project);
  }

  function bindGallery(project) {
    var mainImage = document.getElementById('detail-main-image');
    if (!mainImage) return;

    document.querySelectorAll('[data-image-index]').forEach(function (thumb) {
      thumb.addEventListener('click', function () {
        var index = Number(thumb.getAttribute('data-image-index'));
        var image = project.images[index];

        mainImage.src = '../' + image.src;
        mainImage.alt = localized(image.alt);

        document.querySelectorAll('[data-image-index]').forEach(function (item) {
          item.removeAttribute('aria-current');
        });
        thumb.setAttribute('aria-current', 'true');
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    var wait = function () {
      if (Portfolio.i18n && Portfolio.projects && Portfolio.tech && Portfolio.util) {
        render();
        Portfolio.i18n.onApply(render);
      } else {
        setTimeout(wait, 20);
      }
    };
    wait();
  });
})();
