(function () {
  'use strict';

  var Portfolio = (window.Portfolio = window.Portfolio || {});

  /* Cada ítem usa un logo real en assets/tech/ cuando existe (campo icon);
     el monograma se mantiene como fallback. El flag mono marca logos
     monocromos que se invierten en modo oscuro. */
  Portfolio.technologies = [
    {
      id: 'frontend',
      labelKey: 'tech.cat.frontend',
      shape: 'square',
      items: [
        { name: 'HTML5', mono: 'HTML', icon: 'html5.svg' },
        { name: 'CSS3', mono: 'CSS', icon: 'css3.svg' },
        { name: 'Tailwind CSS', mono: 'TW', icon: 'tailwindcss.svg' },
        { name: 'JavaScript', mono: 'JS', icon: 'javascript.svg' },
        { name: 'React', mono: 'Rct', icon: 'react.svg' },
        { name: 'TypeScript', mono: 'TS', icon: 'typescript.svg' }
      ]
    },
    {
      id: 'backend',
      labelKey: 'tech.cat.backend',
      shape: 'hex',
      items: [
        { name: 'Node.js', mono: 'Node', icon: 'nodejs.svg' },
        { name: 'Express.js', mono: 'Ex', icon: 'express.svg', monoIcon: true },
        { name: 'Laravel', mono: 'Lar', icon: 'laravel.svg' }
      ]
    },
    {
      id: 'database',
      labelKey: 'tech.cat.database',
      shape: 'cylinder',
      items: [
        { name: 'SQL', mono: 'SQL', icon: 'sql.svg' },
        { name: 'MySQL', mono: 'My', icon: 'mysql.svg' },
        { name: 'PostgreSQL', mono: 'Pg', icon: 'postgresql.svg' }
      ]
    },
    {
      id: 'security',
      labelKey: 'tech.cat.security',
      shape: 'shield',
      items: [
        { name: 'API REST', mono: 'API', icon: 'api-rest.svg', monoIcon: true },
        { name: 'JWT', mono: 'JWT', icon: 'jwt.svg', monoIcon: true },
        { name: 'Autenticación', mono: 'Auth', icon: 'autenticacion.svg', monoIcon: true },
        { name: 'Autorización', mono: 'AZ', icon: 'autorizacion.svg', monoIcon: true },
        { name: 'bcrypt', mono: 'bc', icon: 'bcrypt.svg', monoIcon: true },
        { name: 'Zod', mono: 'Zod', icon: 'zod.svg', monoIcon: true }
      ]
    },
    {
      id: 'ai',
      labelKey: 'tech.cat.ai',
      shape: 'spark',
      items: [
        { name: 'AI Agents', mono: 'Ag', icon: 'ai-agents.svg', monoIcon: true },
        { name: 'Agent Skills', mono: 'Sk', icon: 'agent-skills.svg', monoIcon: true },
        { name: 'MCP', mono: 'MCP', icon: 'mcp.svg', monoIcon: true },
        { name: 'Prompt Engineering', mono: 'Pmt', icon: 'prompt-engineering.svg', monoIcon: true }
      ]
    },
    {
      id: 'tools',
      labelKey: 'tech.cat.tools',
      shape: 'circle',
      items: [
        { name: 'Git', mono: 'Git', icon: 'git.svg' },
        { name: 'GitHub', mono: 'GH', icon: 'github.svg', monoIcon: true },
        { name: 'Postman', mono: 'Pm', icon: 'postman.svg' },
        { name: 'Prisma', mono: 'Pr', icon: 'prisma.svg', monoIcon: true }
      ]
    }
  ];
})();
