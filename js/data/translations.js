(function () {
  'use strict';

  var Portfolio = (window.Portfolio = window.Portfolio || {});

  Portfolio.translations = {
    es: {
      'meta.title': 'Nombre Apellido — Full Stack Developer | Portafolio',
      'meta.description':
        'Portafolio de un desarrollador Full Stack: tecnologías, proyectos con y sin inteligencia artificial, y vías de contacto.',

      'a11y.skip': 'Saltar al contenido',
      'a11y.newtab': 'Se abre en una pestaña nueva',

      'nav.label': 'Principal',
      'nav.inicio': 'Inicio',
      'nav.sobremi': 'Sobre mí',
      'nav.proyectos': 'Proyectos',
      'nav.contacto': 'Contacto',
      'nav.menu.open': 'Abrir menú',
      'nav.menu.close': 'Cerrar menú',
      'nav.lang': 'Seleccionar idioma',
      'nav.theme.toDark': 'Cambiar a modo oscuro',
      'nav.theme.toLight': 'Cambiar a modo claro',

      'hero.role': 'Full Stack Developer',
      'hero.text':
        'Construyo aplicaciones web completas, desde la interfaz hasta la base de datos. Trabajo con HTML, CSS y JavaScript en el frontend, y con Node.js y Laravel en el backend, cuidando la calidad del código, la seguridad y la experiencia de usuario.',
      'hero.cta.projects': 'Ver proyectos',
      'hero.cta.contact': 'Contactar',
      'hero.diagram':
        'Diagrama del stack: frontend, API, backend, datos e inteligencia artificial',
      'hero.diagram.frontend': 'Frontend',
      'hero.diagram.api': 'API REST',
      'hero.diagram.backend': 'Backend',
      'hero.diagram.data': 'Datos',
      'hero.diagram.ai': 'Inteligencia artificial',

      'about.title': 'Sobre mí',
      'about.lede':
        'Texto provisional. Aquí se resumirá mi perfil profesional en pocas líneas.',
      'about.personal.title': 'Presentación personal',
      'about.personal.body':
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Desarrollador Full Stack interesado en construir productos digitales claros, mantenibles y bien resueltos de principio a fin.',
      'about.education.title': 'Formación académica',
      'about.education.body':
        'Lorem ipsum dolor sit amet. Formación en desarrollo web y programación, complementada con estudio autodidacta, documentación oficial y proyectos propios.',
      'about.focus.title': 'Enfoque profesional',
      'about.focus.body':
        'Lorem ipsum dolor sit amet. Prefiero soluciones simples antes que complejas: estructura clara, código legible y una base que se pueda mantener con el tiempo.',
      'about.experience.title': 'Experiencia práctica',
      'about.experience.body':
        'Lorem ipsum dolor sit amet. Proyectos de extremo a extremo: interfaces con HTML, CSS y JavaScript, APIs con Node.js y Laravel, y diseño de bases de datos relacionales.',
      'about.interests.title': 'Intereses en desarrollo e IA',
      'about.interests.body':
        'Lorem ipsum dolor sit amet. Interés especial en integrar inteligencia artificial en productos reales: agentes, skills y automatizaciones, sin dejar de lado el desarrollo web tradicional.',

      'tech.title': 'Tecnologías y herramientas',
      'tech.lede':
        'Herramientas con las que trabajo, organizadas por área. Sin porcentajes de dominio: solo lo que uso.',
      'tech.cat.frontend': 'Frontend',
      'tech.cat.backend': 'Backend',
      'tech.cat.database': 'Bases de datos',
      'tech.cat.security': 'APIs y seguridad',
      'tech.cat.ai': 'Inteligencia artificial',
      'tech.cat.tools': 'Herramientas adicionales',

      'projects.title': 'Proyectos',
      'projects.lede':
        'Proyectos desarrollados con tecnologías tradicionales y proyectos que integran inteligencia artificial.',
      'projects.tablist': 'Categorías de proyectos',
      'projects.tab.noai': 'Proyectos sin IA',
      'projects.tab.ai': 'Proyectos con IA',
      'projects.details': 'Ver detalles',
      'projects.back': 'Volver al listado de proyectos',
      'projects.gallery': 'Capturas del proyecto',
      'projects.tech': 'Tecnologías utilizadas',
      'projects.links': 'Enlaces',
      'projects.repo': 'Repositorio en GitHub',
      'projects.demo': 'Versión desplegada',
      'projects.pending': 'Pendiente de completar.',
      'projects.empty.title': 'Todavía no hay proyectos en esta categoría',
      'projects.empty.body':
        'Los proyectos que integren inteligencia artificial se publicarán aquí a medida que estén terminados.',
      'projects.field.description': 'Descripción general',
      'projects.field.objective': 'Objetivo y problema que resuelve',
      'projects.field.features': 'Funcionalidades principales',
      'projects.field.architecture': 'Arquitectura y estructura',
      'projects.field.highlights': 'Características técnicas relevantes',
      'projects.field.challenges': 'Retos técnicos y soluciones',

      'contact.title': 'Contacto',
      'contact.lede':
        'Datos provisionales. Estoy disponible para conversar sobre proyectos, prácticas o colaboraciones.',
      'contact.email': 'Correo electrónico',

      'footer.top': 'Volver arriba'
    },

    en: {
      'meta.title': 'Your Name — Full Stack Developer | Portfolio',
      'meta.description':
        'Full Stack developer portfolio: technologies, projects with and without artificial intelligence, and contact channels.',

      'a11y.skip': 'Skip to content',
      'a11y.newtab': 'Opens in a new tab',

      'nav.label': 'Main',
      'nav.inicio': 'Home',
      'nav.sobremi': 'About me',
      'nav.proyectos': 'Projects',
      'nav.contacto': 'Contact',
      'nav.menu.open': 'Open menu',
      'nav.menu.close': 'Close menu',
      'nav.lang': 'Select language',
      'nav.theme.toDark': 'Switch to dark mode',
      'nav.theme.toLight': 'Switch to light mode',

      'hero.role': 'Full Stack Developer',
      'hero.text':
        'I build complete web applications, from the interface down to the database. I work with HTML, CSS and JavaScript on the frontend, and Node.js and Laravel on the backend, with close attention to code quality, security and user experience.',
      'hero.cta.projects': 'View projects',
      'hero.cta.contact': 'Get in touch',
      'hero.diagram':
        'Stack diagram: frontend, API, backend, data and artificial intelligence',
      'hero.diagram.frontend': 'Frontend',
      'hero.diagram.api': 'REST API',
      'hero.diagram.backend': 'Backend',
      'hero.diagram.data': 'Data',
      'hero.diagram.ai': 'Artificial intelligence',

      'about.title': 'About me',
      'about.lede':
        'Provisional text. This is where my professional profile will be summarised in a few lines.',
      'about.personal.title': 'Personal introduction',
      'about.personal.body':
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Full Stack developer interested in building digital products that are clear, maintainable and well solved end to end.',
      'about.education.title': 'Education',
      'about.education.body':
        'Lorem ipsum dolor sit amet. Training in web development and programming, complemented with self-study, official documentation and personal projects.',
      'about.focus.title': 'Professional approach',
      'about.focus.body':
        'Lorem ipsum dolor sit amet. I prefer simple solutions over complex ones: clear structure, readable code and a base that can be maintained over time.',
      'about.experience.title': 'Hands-on experience',
      'about.experience.body':
        'Lorem ipsum dolor sit amet. End-to-end projects: interfaces with HTML, CSS and JavaScript, APIs with Node.js and Laravel, and relational database design.',
      'about.interests.title': 'Software and AI interests',
      'about.interests.body':
        'Lorem ipsum dolor sit amet. Special interest in bringing artificial intelligence into real products: agents, skills and automations, while keeping the traditional web side of the craft.',

      'tech.title': 'Technologies and tools',
      'tech.lede':
        'The tools I work with, organised by area. No proficiency percentages: only what I actually use.',
      'tech.cat.frontend': 'Frontend',
      'tech.cat.backend': 'Backend',
      'tech.cat.database': 'Databases',
      'tech.cat.security': 'APIs and security',
      'tech.cat.ai': 'Artificial intelligence',
      'tech.cat.tools': 'Additional tools',

      'projects.title': 'Projects',
      'projects.lede':
        'Projects built with traditional technologies and projects that integrate artificial intelligence.',
      'projects.tablist': 'Project categories',
      'projects.tab.noai': 'Projects without AI',
      'projects.tab.ai': 'Projects with AI',
      'projects.details': 'View details',
      'projects.back': 'Back to the project list',
      'projects.gallery': 'Project screenshots',
      'projects.tech': 'Technologies used',
      'projects.links': 'Links',
      'projects.repo': 'GitHub repository',
      'projects.demo': 'Live version',
      'projects.pending': 'Pending completion.',
      'projects.empty.title': 'No projects in this category yet',
      'projects.empty.body':
        'Projects that integrate artificial intelligence will be published here as soon as they are finished.',
      'projects.field.description': 'Overview',
      'projects.field.objective': 'Goal and problem it solves',
      'projects.field.features': 'Main features',
      'projects.field.architecture': 'Architecture and structure',
      'projects.field.highlights': 'Relevant technical details',
      'projects.field.challenges': 'Technical challenges and solutions',

      'contact.title': 'Contact',
      'contact.lede':
        'Provisional data. I am available to talk about projects, internships or collaborations.',
      'contact.email': 'Email',

      'footer.top': 'Back to top'
    }
  };
})();
