(function () {
  'use strict';

  var Portfolio = (window.Portfolio = window.Portfolio || {});

  /* Datos provisionales. Sustituye cada campo por la información real del
     proyecto confirmada. Los campos vacíos se muestran como "pendiente".
     category: 'no-ai' (tecnologías tradicionales) | 'ai' (con inteligencia artificial).
     Las capturas son SVG de maqueta; al añadir capturas reales usa WebP o AVIF,
     con width/height y texto alternativo descriptivo en ambos idiomas. */
  Portfolio.projects = [
    {
      id: 'ecommerce',
      category: 'no-ai',
      name: { es: 'E-commerce Full Stack', en: 'Full Stack E-commerce' },
      summary: {
        es: 'Aplicación de comercio electrónico de extremo a extremo. Descripción provisional pendiente de confirmar.',
        en: 'End-to-end e-commerce application. Provisional description pending confirmation.'
      },
      description: {
        es: 'Proyecto de comercio electrónico desarrollado de extremo a extremo. El contenido detallado está pendiente de completar.',
        en: 'E-commerce project built end to end. Detailed content is pending completion.'
      },
      objective: { es: '', en: '' },
      features: { es: [], en: [] },
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'MySQL', 'JWT'],
      architecture: { es: '', en: '' },
      highlights: { es: [], en: [] },
      challenges: { es: [], en: [] },
      repository: null,
      demo: null,
      images: [
        {
          src: 'assets/projects/ecommerce-1.svg',
          alt: { es: 'Captura provisional de la interfaz del E-commerce', en: 'Provisional screenshot of the e-commerce interface' }
        },
        {
          src: 'assets/projects/ecommerce-2.svg',
          alt: { es: 'Captura provisional de una vista interior del E-commerce', en: 'Provisional screenshot of an inner view of the e-commerce' }
        }
      ]
    },
    {
      id: 'auth',
      category: 'no-ai',
      name: { es: 'Sistema de autenticación y autorización', en: 'Authentication and authorization system' },
      summary: {
        es: 'Sistema de registro e inicio de sesión con control de permisos. Descripción provisional pendiente de confirmar.',
        en: 'Registration and sign-in system with permission control. Provisional description pending confirmation.'
      },
      description: {
        es: 'Proyecto centrado en autenticación y autorización de usuarios. El contenido detallado está pendiente de completar.',
        en: 'Project focused on user authentication and authorization. Detailed content is pending completion.'
      },
      objective: { es: '', en: '' },
      features: { es: [], en: [] },
      tech: ['Node.js', 'Express.js', 'PostgreSQL', 'JWT', 'bcrypt', 'Zod', 'Prisma'],
      architecture: { es: '', en: '' },
      highlights: { es: [], en: [] },
      challenges: { es: [], en: [] },
      repository: null,
      demo: null,
      images: [
        {
          src: 'assets/projects/auth-1.svg',
          alt: { es: 'Captura provisional de la pantalla de acceso', en: 'Provisional screenshot of the sign-in screen' }
        },
        {
          src: 'assets/projects/auth-2.svg',
          alt: { es: 'Captura provisional del panel de usuarios', en: 'Provisional screenshot of the user panel' }
        }
      ]
    },
    {
      id: 'seguros',
      category: 'no-ai',
      name: { es: 'Aplicación de gestión de seguros', en: 'Insurance management application' },
      summary: {
        es: 'Aplicación para la gestión de pólizas y clientes. Descripción provisional pendiente de confirmar.',
        en: 'Application for managing policies and clients. Provisional description pending confirmation.'
      },
      description: {
        es: 'Proyecto de gestión orientado al sector asegurador. El contenido detallado está pendiente de completar.',
        en: 'Management project for the insurance sector. Detailed content is pending completion.'
      },
      objective: { es: '', en: '' },
      features: { es: [], en: [] },
      tech: ['Laravel', 'MySQL', 'JavaScript', 'Tailwind CSS'],
      architecture: { es: '', en: '' },
      highlights: { es: [], en: [] },
      challenges: { es: [], en: [] },
      repository: null,
      demo: null,
      images: [
        {
          src: 'assets/projects/seguros-1.svg',
          alt: { es: 'Captura provisional del listado de pólizas', en: 'Provisional screenshot of the policy list' }
        },
        {
          src: 'assets/projects/seguros-2.svg',
          alt: { es: 'Captura provisional de la ficha de cliente', en: 'Provisional screenshot of the client record' }
        }
      ]
    },
    {
      id: 'sofarmatic',
      category: 'no-ai',
      name: { es: 'Sistema de gestión de farmacia (Sofarmatic)', en: 'Pharmacy management system (Sofarmatic)' },
      summary: {
        es: 'Sistema de gestión para farmacias. Descripción provisional pendiente de confirmar.',
        en: 'Management system for pharmacies. Provisional description pending confirmation.'
      },
      description: {
        es: 'Proyecto de gestión de farmacia. El contenido detallado está pendiente de completar.',
        en: 'Pharmacy management project. Detailed content is pending completion.'
      },
      objective: { es: '', en: '' },
      features: { es: [], en: [] },
      tech: ['Laravel', 'MySQL', 'JavaScript'],
      architecture: { es: '', en: '' },
      highlights: { es: [], en: [] },
      challenges: { es: [], en: [] },
      repository: null,
      demo: null,
      images: [
        {
          src: 'assets/projects/sofarmatic-1.svg',
          alt: { es: 'Captura provisional del inventario de farmacia', en: 'Provisional screenshot of the pharmacy inventory' }
        },
        {
          src: 'assets/projects/sofarmatic-2.svg',
          alt: { es: 'Captura provisional del módulo de ventas', en: 'Provisional screenshot of the sales module' }
        }
      ]
    }
  ];
})();
