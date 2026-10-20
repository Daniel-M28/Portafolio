(function () {
  'use strict';

  var Portfolio = (window.Portfolio = window.Portfolio || {});

  /* Cada categoría usa una forma geométrica distinta para identificar el área
     de un vistazo; el monograma evita depender de logotipos de terceros. */
  Portfolio.technologies = [
    {
      id: 'frontend',
      labelKey: 'tech.cat.frontend',
      shape: 'square',
      items: [
        { name: 'HTML5', mono: 'HTML' },
        { name: 'CSS3', mono: 'CSS' },
        { name: 'Tailwind CSS', mono: 'TW' },
        { name: 'JavaScript', mono: 'JS' },
        { name: 'React', mono: 'Rct' },
        { name: 'TypeScript', mono: 'TS' }
      ]
    },
    {
      id: 'backend',
      labelKey: 'tech.cat.backend',
      shape: 'hex',
      items: [
        { name: 'Node.js', mono: 'Node' },
        { name: 'Express.js', mono: 'Ex' },
        { name: 'Laravel', mono: 'Lar' }
      ]
    },
    {
      id: 'database',
      labelKey: 'tech.cat.database',
      shape: 'cylinder',
      items: [
        { name: 'SQL', mono: 'SQL' },
        { name: 'MySQL', mono: 'My' },
        { name: 'PostgreSQL', mono: 'Pg' }
      ]
    },
    {
      id: 'security',
      labelKey: 'tech.cat.security',
      shape: 'shield',
      items: [
        { name: 'API REST', mono: 'API' },
        { name: 'JWT', mono: 'JWT' },
        { name: 'Autenticación', mono: 'Auth' },
        { name: 'Autorización', mono: 'AZ' },
        { name: 'bcrypt', mono: 'bc' },
        { name: 'Zod', mono: 'Zod' }
      ]
    },
    {
      id: 'ai',
      labelKey: 'tech.cat.ai',
      shape: 'spark',
      items: [
        { name: 'AI Agents', mono: 'Ag' },
        { name: 'Agent Skills', mono: 'Sk' },
        { name: 'MCP', mono: 'MCP' },
        { name: 'Prompt Engineering', mono: 'Pmt' }
      ]
    },
    {
      id: 'tools',
      labelKey: 'tech.cat.tools',
      shape: 'circle',
      items: [
        { name: 'Git', mono: 'Git' },
        { name: 'GitHub', mono: 'GH' },
        { name: 'Postman', mono: 'Pm' },
        { name: 'Prisma', mono: 'Pr' }
      ]
    }
  ];
})();
