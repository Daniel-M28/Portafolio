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
        en: 'E-commerce platform with product and category management, shopping cart, orders and user authentication.'
      },
    
      description: {
        es: 'Plataforma de comercio electrónico que permite a los usuarios explorar el catálogo de productos, gestionar un carrito de compras y realizar pedidos. Incluye un panel administrativo para gestionar productos, categorías, inventario y pedidos, junto con funcionalidades de autenticación y control de acceso según los roles de usuario.',
        en: 'E-commerce platform that lets users browse the product catalog, manage a shopping cart and place orders. It includes an admin panel to manage products, categories, inventory and orders, along with authentication and role-based access control features.'
      },
      objective: { es: 'Desarrollar una plataforma de comercio electrónico tradicional que permita centralizar la venta de productos a través de internet. Busca facilitar la experiencia de compra de los usuarios y proporcionar herramientas administrativas para gestionar el catálogo, controlar el inventario y administrar los pedidos desde un único sistema.', en: 'Build a traditional e-commerce platform that centralizes the sale of products over the internet. It aims to make the shopping experience easier for users and to provide administrative tools to manage the catalog, control inventory and handle orders from a single system.' },
      features: { es: ['Gestión de productos', 'Gestión de categorías', 'Carrito de compras', 'Sistema de pedidos', 'Autenticación de usuarios'], en: ['Product management', 'Category management', 'Shopping cart', 'Order system', 'User authentication'] },
      tech: ['HTML5','Tailwind CSS', 'JavaScript', 'Node.js', 'Express.js', 'MySQL', 'JWT', 'Zod', 'Prisma'],
      architecture: { es: 'Arquitectura Full Stack con separación entre frontend y backend, organización modular que separa rutas, controladores, servicios, esquemas de validación, middlewares y configuración. La base de datos utiliza entidades relacionadas', en: 'Full Stack architecture with a clear separation between frontend and backend, and a modular organization that separates routes, controllers, services, validation schemas, middlewares and configuration. The database uses related entities.' },
      highlights: { es: ['Desarrollo de API REST para la comunicación entre frontend y backend','Autenticación mediante tokens JWT', 'Control de acceso basado en roles', 'Despliegue en un entorno de producción'], en: ['REST API development for communication between frontend and backend', 'Authentication via JWT tokens', 'Role-based access control', 'Deployment in a production environment'] },
      challenges: { es: 'Uno de los principales retos fue establecer una comunicación consistente entre las diferentes capas de la aplicación y mantener sincronizados los datos relacionados con productos, inventario, carritos y pedidos.', en: 'One of the main challenges was establishing consistent communication between the different layers of the application and keeping the data related to products, inventory, carts and orders in sync.' },
      repository: null,
      demo:
       'https://ecommerce-fullstack-two-blue.vercel.app/',
       
      images: [
        {
          src: 'assets/images/e-commerce1.png',
          alt: { es: 'Captura de la interfaz del E-commerce', en: 'Screenshot of the e-commerce interface' }
        },
        {
          src: 'assets/images/e-commerce2.png',
          alt: { es: 'Captura del catálogo de productos del E-commerce', en: 'Screenshot of the e-commerce product catalog' }
        },
        {
          src: 'assets/images/e-commerce3.png',
          alt: { es: 'Captura del carrito de compras del E-commerce', en: 'Screenshot of the e-commerce shopping cart' }
        },
        {
          src: 'assets/images/e-commerce4.png',
          alt: { es: 'Captura del panel administrativo del E-commerce', en: 'Screenshot of the e-commerce admin panel' }
        }
      ]
    },
    {
      id: 'auth',
      category: 'no-ai',
      name: { es: 'Sistema de autenticación y autorización', en: 'Authentication and authorization system' },
      summary: {
        es: 'Aplicación Full Stack de autenticación y autorización con JWT, gestión de usuarios y roles.',
        en: 'Full Stack authentication and authorization application with JWT, user and role management.'
      },
      description: {
        es: 'Aplicación enfocada en la gestión de usuarios y seguridad de acceso. Permite el registro e inicio de sesión, validación de credenciales, protección de rutas y control de permisos mediante roles. Cuenta con una estructura que separa las responsabilidades del cliente y el servidor para facilitar el mantenimiento y la evolución del sistema.',
        en: 'Application focused on user management and access security. It allows registration and sign-in, credential validation, route protection and permission control through roles. It has a structure that separates client and server responsibilities to make the system easier to maintain and evolve.'
      },
      objective: { es: 'Desarrollar un sistema de autenticación que permita gestionar de forma segura el acceso de los usuarios a una aplicación. Su propósito es centralizar el registro, inicio de sesión y control de permisos, proporcionando una base reutilizable para aplicaciones que requieren identificación de usuarios y acceso diferenciado según sus responsabilidades.', en: 'Build an authentication system that securely manages user access to an application. Its purpose is to centralize registration, sign-in and permission control, providing a reusable base for applications that require user identification and differentiated access based on responsibilities.' },
      features: { es: ['Registro de nuevos usuarios','Inicio de sesión mediante credenciales','Validación de datos durante el registro y autenticación','Protección de contraseñas mediante técnicas de cifrado hash','Generación y validación de tokens de autenticación', 'Gestión de roles de administrador y usuario'], en: ['New user registration', 'Sign-in with credentials', 'Data validation during registration and authentication', 'Password protection through hash encryption techniques', 'Generation and validation of authentication tokens', 'Management of admin and user roles'] },
      tech: ['Node.js', 'Express.js', 'PostgreSQL', 'JWT', 'bcrypt', 'Zod'],
      architecture: { es: 'La aplicación mantiene separadas las responsabilidades de presentación, rutas, controladores, validaciones y acceso a datos, permitiendo que cada componente tenga una función definida.', en: 'The application keeps the responsibilities of presentation, routes, controllers, validations and data access separated, allowing each component to have a well-defined role.' },
      highlights: { es: ['Autenticación basada en JWT','Almacenamiento seguro de contraseñas mediante hashing','Protección de rutas privadas','Persistencia de usuarios en una base de datos relacional'], en: ['JWT-based authentication', 'Secure password storage through hashing', 'Protection of private routes', 'User persistence in a relational database'] },
      challenges: { es: 'Un reto importante fue garantizar la protección de las contraseñas y evitar almacenar credenciales en texto plano. Para solucionarlo, se implementó un proceso de hashing antes de guardar las contraseñas en la base de datos.', en: 'An important challenge was guaranteeing password protection and avoiding storing credentials in plain text. To solve it, a hashing process was implemented before saving passwords to the database.' },
      
      repository: null,
      demo: 'https://login-authentication-with-jwt.vercel.app/login',
      images: [
        {
          src: 'assets/images/auth1.png',
          alt: { es: 'Captura de la pantalla de acceso', en: 'Screenshot of the sign-in screen' }
        },
        {
          src: 'assets/images/auth2.png',
          alt: { es: 'Captura del registro de usuarios', en: 'Screenshot of the user registration' }
        },
        {
          src: 'assets/images/auth3.png',
          alt: { es: 'Captura del panel de usuarios', en: 'Screenshot of the user panel' }
        }
      ]
    },
    {
      id: 'seguros',
      category: 'no-ai',
      name: { es: 'Aplicación de gestión de seguros', en: 'Insurance management application' },
      summary: {
        es: 'Aplicación web para la gestión de clientes, asesores, certificados de seguros y pólizas.',
        en: 'Web application for managing clients, advisors, insurance certificates and policies.'
      },
      description: {
        es: 'Aplicación web orientada a la gestión de una consultora de seguros, facilitando la administración de usuarios, clientes, asesores y sus respectivos roles. Incluye funcionalidades para gestionar pólizas y certificados de seguro, así como herramientas para organizar la información y facilitar las operaciones administrativas de la plataforma.',
        en: 'Web application aimed at managing an insurance consultancy, making it easier to administer users, clients, advisors and their respective roles. It includes features to manage policies and insurance certificates, as well as tools to organize information and streamline the platform\'s administrative operations.'
      },
      objective: { es: 'Desarrollar una aplicación web para una consultora independiente de seguros, orientada a centralizar la gestión de clientes, asesores, pólizas y certificados de seguro. Busca organizar la información de la operación, facilitar el acceso a los documentos y simplificar las tareas administrativas mediante una plataforma con diferentes niveles de acceso.', en: 'Build a web application for an independent insurance consultancy, aimed at centralizing the management of clients, advisors, policies and insurance certificates. It seeks to organize the operation\'s information, make documents easier to access and simplify administrative tasks through a platform with different access levels.' },
      features: { es: ['Autenticación y gestión de usuarios','Administración de roles: administrador, asesor y usuario','Gestión y consulta de pólizas de seguros', 'Gestión de certificados de seguro (COI)'], en: ['Authentication and user management', 'Role administration: administrator, advisor and user', 'Management and lookup of insurance policies', 'Management of insurance certificates (COI)'] },
      tech: ['Laravel', 'MySQL', 'JavaScript', 'Tailwind CSS'],
      architecture: { es: 'Aplicación desarrollada bajo el patrón arquitectónico MVC (Modelo-Vista-Controlador), separando la lógica de negocio, el acceso a datos y la presentación de la información, Las vistas están organizadas mediante plantillas reutilizables, mientras que los controladores gestionan las solicitudes y coordinan las operaciones con los modelos correspondientes.', en: 'Application built under the MVC (Model-View-Controller) architectural pattern, separating business logic, data access and information presentation. Views are organized through reusable templates, while controllers handle requests and coordinate operations with the corresponding models.' },
      highlights: { es: ['Implementación de arquitectura MVC' , 'Protección de rutas según niveles de acceso', 'Validación de formularios y datos', 'Gestión de documentos relacionados con pólizas y certificados', 'Organización modular de funcionalidades administrativas'], en: ['Implementation of MVC architecture', 'Route protection based on access levels', 'Form and data validation', 'Management of documents related to policies and certificates', 'Modular organization of administrative features'] },
      challenges: { es: 'Uno de los retos del proyecto fue organizar los permisos y funcionalidades para distintos tipos de usuarios, evitando que todos tuvieran acceso a las mismas operaciones. Para solucionarlo, se separaron los procesos de autenticación y autorización, utilizando middlewares para verificar la identidad y los permisos antes de permitir el acceso a rutas protegidas', en: 'One of the project\'s challenges was organizing permissions and features for different types of users, preventing everyone from having access to the same operations. To solve it, the authentication and authorization processes were separated, using middlewares to verify identity and permissions before allowing access to protected routes.' },
      
      
      repository: null,
      demo: 'https://www.insuranceconsultantapp.com/',
      images: [
        {
          src: 'assets/images/Seguros1.png',
          alt: { es: 'Captura del listado de pólizas', en: 'Screenshot of the policy list' }
        },
        {
          src: 'assets/images/seguros2.png',
          alt: { es: 'Captura de la ficha de cliente', en: 'Screenshot of the client record' }
        },
        {
          src: 'assets/images/seguros3.png',
          alt: { es: 'Captura de la gestión de asesores', en: 'Screenshot of the advisor management' }
        },
        {
          src: 'assets/images/seguros4.png',
          alt: { es: 'Captura de la gestión de certificados', en: 'Screenshot of the certificate management' }
        },
        {
          src: 'assets/images/seguros5.png',
          alt: { es: 'Captura del panel administrativo de seguros', en: 'Screenshot of the insurance admin panel' }
        }
      ]
    },
    {
      id: 'sofarmatic',
      category: 'no-ai',
      name: { es: 'Sistema de gestión de farmacia (Sofarmatic)', en: 'Pharmacy management system (Sofarmatic)' },
      summary: {
        es: 'Aplicación web para la gestión de inventario farmacéutico, productos y operaciones administrativas.',
        en: 'Web application for managing pharmaceutical inventory, products and administrative operations.'
      },
      description: {
        es: 'Aplicación web para la administración de una farmacia, diseñada para centralizar la gestión de productos e inventario y facilitar las operaciones habituales del negocio. Permite organizar la información de los productos y realizar tareas administrativas desde una interfaz centralizada, mejorando el control y la organización de los recursos de la farmacia.',
        en: 'Web application for managing a pharmacy, designed to centralize product and inventory management and streamline the business\'s everyday operations. It makes it possible to organize product information and carry out administrative tasks from a centralized interface, improving control and organization of the pharmacy\'s resources.'
      },
      objective: { es: 'Desarrollar una aplicación web orientada a la administración de una farmacia, que permita centralizar la información de sus productos y operaciones. Su objetivo es facilitar el control de inventario, organizar los registros y reducir la dependencia de procesos manuales para la administración cotidiana del negocio.', en: 'Build a web application aimed at administering a pharmacy, allowing the information about its products and operations to be centralized. Its goal is to make inventory control easier, organize records and reduce reliance on manual processes for the day-to-day administration of the business.' },
      features: { es: ['Administración del catálogo de productos farmacéuticos','Gestión y control de inventario', 'Agendamiento de citas', ], en: ['Management of the pharmaceutical product catalog', 'Inventory management and control', 'Appointment scheduling'] },
      tech: ['HTML5','CSS3','Laravel', 'MySQL', 'JavaScript'],
      architecture: { es: 'Aplicación web organizada mediante una separación entre la interfaz de usuario, la lógica de procesamiento y la gestión de datos.', en: 'Web application organized with a separation between the user interface, the processing logic and data management.' },
      highlights: { es: ['Gestión de información mediante operaciones CRUD', 'Persistencia de datos en una base de datos relacional', 'Interfaz orientada a la administración de productos e inventario'], en: ['Information management through CRUD operations', 'Data persistence in a relational database', 'Interface oriented toward product and inventory administration'] },
      challenges: { es: 'Uno de los principales retos técnicos del sistema fue mantener organizada y sincronizada la información de los productos y el inventario, Para ello, utilize operaciones estructuradas de gestión de datos y validaciones que permitieron mantener la sincronizacion de los registros y facilitar las tareas administrativas.', en: 'One of the system\'s main technical challenges was keeping product and inventory information organized and in sync. To achieve this, I used structured data management operations and validations that kept records synchronized and made administrative tasks easier.' },
      repository: null,
      demo: 'https://github.com/Daniel-M28/Proyecto-farmacia-SENA',
      images: [
        {
          src: 'assets/projects/sofarmatic-1.svg',
          alt: { es: 'Captura del inventario de farmacia', en: 'Screenshot of the pharmacy inventory' }
        },
        {
          src: 'assets/projects/sofarmatic-2.svg',
          alt: { es: 'Captura del módulo de ventas', en: 'Screenshot of the sales module' }
        }
      ]
    },
    {
      id: 'portafolio',
      category: 'ai',
      name: { es: 'Portafolio personal', en: 'Personal portfolio' },
      summary: {
        es: 'Sitio web de portafolio personal para presentar perfil, tecnologías y proyectos, con soporte multi-idioma y modo claro/oscuro.',
        en: 'Personal portfolio website to showcase profile, technologies and projects, with multi-language support and light/dark mode.'
      },
      description: {
        es: 'Desarrollo de un portafolio web personal orientado a presentar mi perfil como desarrollador Full Stack, mostrar los proyectos realizados y documentar las decisiones técnicas detrás de cada uno. Además, representa una oportunidad para explorar nuevas formas de desarrollar software mediante herramientas de IA, integrándolas como apoyo durante las diferentes etapas del proceso de desarrollo.',
        en: 'Development of a personal web portfolio aimed at presenting my profile as a Full Stack developer, showcasing the projects I have built and documenting the technical decisions behind each one. It also represents an opportunity to explore new ways of developing software through AI tools, integrating them as support throughout the different stages of the development process.'
      },
      objective: { es: 'Desarrollar un sitio web que centralice la presentación del perfil profesional, las tecnologías y los proyectos, ofreciendo una experiencia clara, accesible y adaptable a distintos dispositivos e idiomas.', en: 'Build a website that centralizes the presentation of the professional profile, technologies and projects, offering a clear, accessible experience that adapts to different devices and languages.' },
      features: { es: ['Uso de OpenCode como entorno de desarrollo asistido por inteligencia artificial','Aplicación de Prompt Engineering para definir instrucciones y orientar las tareas de desarrollo','Uso de archivos de contexto e instrucciones para establecer criterios de desarrollo y mantener la coherencia del proyecto','Integración de IA como herramienta de apoyo en la planificación, implementación y revisión del código'], en: ['Use of OpenCode as an AI-assisted development environment', 'Application of Prompt Engineering to define instructions and guide development tasks', 'Use of context files and instructions to establish development criteria and maintain project consistency', 'Integration of AI as a support tool in planning, implementation and code review'] },
      tech: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript', 'AI Agents', 'Prompt Engineering', 'Agent Skills', 'MCP'],
      architecture: { es: 'Sitio estático organizado en módulos independientes (tema, i18n, navegación y fondo animado) que se inicializan de forma centralizada, con los datos de proyectos y traducciones separados de la presentación.', en: 'Static site organized into independent modules (theme, i18n, navigation and animated background) that initialize centrally, with project and translation data separated from the presentation.' },
      highlights: { es: ['Internacionalización con cambio de idioma en tiempo real', 'Tema claro/oscuro persistente en el navegador', 'Renderizado de datos dinámico desde estructuras de datos', 'Diseño responsive y accesible'], en: ['Internationalization with real-time language switching', 'Light/dark theme persisted in the browser', 'Dynamic data rendering from data structures', 'Responsive and accessible design'] },
      challenges: { es: 'Uno de los principales retos fue utilizar inteligencia artificial sin perder el control sobre las decisiones técnicas y la estructura del proyecto. Para abordarlo, se definieron instrucciones y criterios de desarrollo que orientan el comportamiento del agente, delimitan las tecnologías permitidas y establecen convenciones para mantener la consistencia del código.', en: 'One of the main challenges was using artificial intelligence without losing control over the technical decisions and structure of the project. To address this, instructions and development criteria were defined to guide the agent\'s behavior, delimit the allowed technologies and establish conventions to maintain code consistency.' },
      repository: null,
      demo: 'https://portafolio-theta-steel.vercel.app/',
      images: [
        {
          src: 'assets/images/portafolio.png',
          alt: { es: 'Captura de la página principal del portafolio', en: 'Screenshot of the portfolio main page' }
        }
      ]
    }
  ];
})();
