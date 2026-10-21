(function () {
  'use strict';

  var Portfolio = (window.Portfolio = window.Portfolio || {});

  Portfolio.projects = [
    {
      id: 'ecommerce',
      category: 'no-ai',
      name: { es: 'E-commerce Full Stack', en: 'Full Stack E-commerce' },
      summary: {
        es: 'Plataforma de comercio electrónico con gestión de productos, categorías, carrito de compras, pedidos y autenticación de usuarios.',
        en: 'End-to-end e-commerce application. Provisional description pending confirmation.'
      },
    
      description: {
        es: 'Plataforma de comercio electrónico que permite a los usuarios explorar el catálogo de productos, gestionar un carrito de compras y realizar pedidos. Incluye un panel administrativo para gestionar productos, categorías, inventario y pedidos, junto con funcionalidades de autenticación y control de acceso según los roles de usuario.',
        en: 'E-commerce project built end to end. Detailed content is pending completion.'
      },
      objective: { es: 'Desarrollar una plataforma de comercio electrónico tradicional que permita centralizar la venta de productos a través de internet. Busca facilitar la experiencia de compra de los usuarios y proporcionar herramientas administrativas para gestionar el catálogo, controlar el inventario y administrar los pedidos desde un único sistema.', en: '' },
      features: { es: ['Gestión de productos', 'Gestión de categorías', 'Carrito de compras', 'Sistema de pedidos', 'Autenticación de usuarios'], en: [] },
      tech: ['HTML5','Tailwind CSS', 'JavaScript', 'Node.js', 'Express.js', 'MySQL', 'JWT', 'Zod', 'Prisma'],
      architecture: { es: 'Arquitectura Full Stack con separación entre frontend y backend, organización modular que separa rutas, controladores, servicios, esquemas de validación, middlewares y configuración. La base de datos utiliza entidades relacionadas', en: '' },
      highlights: { es: ['Desarrollo de API REST para la comunicación entre frontend y backend','Autenticación mediante tokens JWT', 'Control de acceso basado en roles', 'Despliegue en un entorno de producción'], en: [] },
      challenges: { es: 'Uno de los principales retos fue establecer una comunicación consistente entre las diferentes capas de la aplicación y mantener sincronizados los datos relacionados con productos, inventario, carritos y pedidos.', en: [] },
      repository: null,
      demo:
       'https://ecommerce-fullstack-two-blue.vercel.app/',
       
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
        es: 'Aplicación Full Stack de autenticación y autorización con JWT, gestión de usuarios y roles.',
        en: 'Registration and sign-in system with permission control. Provisional description pending confirmation.'
      },
      description: {
        es: 'Aplicación enfocada en la gestión de usuarios y seguridad de acceso. Permite el registro e inicio de sesión, validación de credenciales, protección de rutas y control de permisos mediante roles. Cuenta con una estructura que separa las responsabilidades del cliente y el servidor para facilitar el mantenimiento y la evolución del sistema.',
        en: 'Project focused on user authentication and authorization. Detailed content is pending completion.'
      },
      objective: { es: 'Desarrollar un sistema de autenticación que permita gestionar de forma segura el acceso de los usuarios a una aplicación. Su propósito es centralizar el registro, inicio de sesión y control de permisos, proporcionando una base reutilizable para aplicaciones que requieren identificación de usuarios y acceso diferenciado según sus responsabilidades.', en: '' },
      features: { es: ['Registro de nuevos usuarios','Inicio de sesión mediante credenciales','Validación de datos durante el registro y autenticación','Protección de contraseñas mediante técnicas de cifrado hash','Generación y validación de tokens de autenticación', 'Gestión de roles de administrador y usuario'], en: [] },
      tech: ['Node.js', 'Express.js', 'PostgreSQL', 'JWT', 'bcrypt', 'Zod'],
      architecture: { es: 'La aplicación mantiene separadas las responsabilidades de presentación, rutas, controladores, validaciones y acceso a datos, permitiendo que cada componente tenga una función definida.', en: '' },
      highlights: { es: ['Autenticación basada en JWT','Almacenamiento seguro de contraseñas mediante hashing','Protección de rutas privadas','Persistencia de usuarios en una base de datos relacional'], en: [] },
      challenges: { es: 'Un reto importante fue garantizar la protección de las contraseñas y evitar almacenar credenciales en texto plano. Para solucionarlo, se implementó un proceso de hashing antes de guardar las contraseñas en la base de datos.', en: [] },
      
      repository: null,
      demo: 'https://login-authentication-with-jwt.vercel.app/login',
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
        es: 'Aplicación web para la gestión de clientes, asesores, certificados de seguros y pólizas.',
        en: 'Application for managing policies and clients. Provisional description pending confirmation.'
      },
      description: {
        es: 'Aplicación web orientada a la gestión de una consultora de seguros, facilitando la administración de usuarios, clientes, asesores y sus respectivos roles. Incluye funcionalidades para gestionar pólizas y certificados de seguro, así como herramientas para organizar la información y facilitar las operaciones administrativas de la plataforma.',
        en: 'Management project for the insurance sector. Detailed content is pending completion.'
      },
      objective: { es: 'Desarrollar una aplicación web para una consultora independiente de seguros, orientada a centralizar la gestión de clientes, asesores, pólizas y certificados de seguro. Busca organizar la información de la operación, facilitar el acceso a los documentos y simplificar las tareas administrativas mediante una plataforma con diferentes niveles de acceso.', en: '' },
      features: { es: ['Autenticación y gestión de usuarios','Administración de roles: administrador, asesor y usuario','Gestión y consulta de pólizas de seguros', 'Gestión de certificados de seguro (COI)'], en: [] },
      tech: ['Laravel', 'MySQL', 'JavaScript', 'Tailwind CSS'],
      architecture: { es: 'Aplicación desarrollada bajo el patrón arquitectónico MVC (Modelo-Vista-Controlador), separando la lógica de negocio, el acceso a datos y la presentación de la información, Las vistas están organizadas mediante plantillas reutilizables, mientras que los controladores gestionan las solicitudes y coordinan las operaciones con los modelos correspondientes.', en: '' },
      highlights: { es: ['Implementación de arquitectura MVC' , 'Protección de rutas según niveles de acceso', 'Validación de formularios y datos', 'Gestión de documentos relacionados con pólizas y certificados', 'Organización modular de funcionalidades administrativas'], en: [] },
      challenges: { es: 'Uno de los retos del proyecto fue organizar los permisos y funcionalidades para distintos tipos de usuarios, evitando que todos tuvieran acceso a las mismas operaciones. Para solucionarlo, se separaron los procesos de autenticación y autorización, utilizando middlewares para verificar la identidad y los permisos antes de permitir el acceso a rutas protegidas', en: [] },
      
      
      repository: null,
      demo: 'https://www.insuranceconsultantapp.com/',
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
        es: 'Aplicación web para la gestión de inventario farmacéutico, productos y operaciones administrativas.',
        en: 'Management system for pharmacies. Provisional description pending confirmation.'
      },
      description: {
        es: 'Aplicación web para la administración de una farmacia, diseñada para centralizar la gestión de productos e inventario y facilitar las operaciones habituales del negocio. Permite organizar la información de los productos y realizar tareas administrativas desde una interfaz centralizada, mejorando el control y la organización de los recursos de la farmacia.',
        en: 'Pharmacy management project. Detailed content is pending completion.'
      },
      objective: { es: 'Desarrollar una aplicación web orientada a la administración de una farmacia, que permita centralizar la información de sus productos y operaciones. Su objetivo es facilitar el control de inventario, organizar los registros y reducir la dependencia de procesos manuales para la administración cotidiana del negocio.', en: '' },
      features: { es: ['Administración del catálogo de productos farmacéuticos','Gestión y control de inventario', 'Agendamiento de citas', ], en: [] },
      tech: ['HTML5','CSS3','Laravel', 'MySQL', 'JavaScript'],
      architecture: { es: 'Aplicación web organizada mediante una separación entre la interfaz de usuario, la lógica de procesamiento y la gestión de datos.', en: '' },
      highlights: { es: ['Gestión de información mediante operaciones CRUD', 'Persistencia de datos en una base de datos relacional', 'Interfaz orientada a la administración de productos e inventario'], en: [] },
      challenges: { es: 'Uno de los principales retos técnicos del sistema fue mantener organizada y sincronizada la información de los productos y el inventario, Para ello, utilize operaciones estructuradas de gestión de datos y validaciones que permitieron mantener la sincronizacion de los registros y facilitar las tareas administrativas.', en: [] },
      repository: null,
      demo: 'https://github.com/Daniel-M28/Proyecto-farmacia-SENA',
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
