AGENTS.md — Portafolio 

1. Objetivo del proyecto

Desarrollar un portafolio web profesional, moderno, visualmente atractivo y responsive para presentar mi perfil como Desarrollador Full Stack.

El portafolio debe comunicar mis conocimientos, experiencia práctica, tecnologías utilizadas y proyectos desarrollados. Debe transmitir profesionalismo, organización, capacidad técnica y adaptación a las nuevas tendencias del desarrollo de software, incluyendo inteligencia artificial.


El resultado debe ser una página rápida, intuitiva, accesible y con una identidad visual consistente.
---

### 2. Tecnologías y restricciones

Stack obligatorio

HTML5 para la estructura.

Tailwind CSS para los estilos.

JavaScript Vanilla (ES6+) para la lógica y las interacciones.

Restricciones

No utilizar React, Vue, Angular ni otros frameworks.

No utilizar bibliotecas o dependencias externas de JavaScript.

No utilizar Bootstrap ni otros frameworks CSS.

No utilizar herramientas de construcción como Vite o Webpack.

No utilizar TypeScript.

Priorizar código limpio, modular, reutilizable y fácil de mantener.

Utilizar JavaScript para generar componentes dinámicos únicamente cuando aporte valor.

Utilizar SVG inline para iconos cuando sea necesario, evitando dependencias adicionales.

Tailwind CSS puede utilizarse mediante CDN para mantener el proyecto sencillo y sin procesos de compilación.

### 3. Diseño e identidad visual

Dirección de diseño

Crear una interfaz moderna, minimalista y profesional, inspirada en portafolios de desarrolladores Full Stack contemporáneos.

El diseño debe tener:

Buena jerarquía visual.

Tipografía moderna y legible.

Espaciado equilibrado.

Animaciones sutiles y fluidas.

Transiciones suaves entre interacciones.

Componentes visualmente consistentes.

Uso moderado de efectos y elementos decorativos.

Evitar diseños genéricos, exceso de elementos visuales, animaciones innecesarias y apariencia de plantilla predeterminada.

## Paleta de colores

Utilizar principalmente:

Azul oscuro: color principal.

Azul intermedio: acentos y elementos interactivos.

Azul claro: detalles y fondos secundarios.

Blanco: fondos y elementos de contraste.

Gris: textos secundarios y divisores.

La paleta debe adaptarse correctamente a los dos temas.

## Diseño responsive

La interfaz debe adaptarse a:

Móviles.

Tablets.

Portátiles.

Monitores de escritorio.

Aplicar un enfoque Mobile First. Ninguna sección debe presentar desbordamientos horizontales ni elementos superpuestos.

### 4. Estructura general

El portafolio estará compuesto por cinco secciones principales:

Inicio.

Sobre mí.

Tecnologías y herramientas.

Proyectos.

Contacto.

Utilizar navegación mediante desplazamiento suave (smooth scrolling), manteniendo una experiencia fluida.

## Navbar

Crear una barra de navegación moderna, preferiblemente fija o sticky.

Elementos:

Logo o nombre profesional.

Inicio.

Sobre mí.

Proyectos.

Contacto.

Selector de idioma.

Selector de tema claro/oscuro.

El menú debe:

Mantener una distribución equilibrada.

Resaltar visualmente la sección activa.

Convertirse en un menú desplegable o hamburguesa en dispositivos móviles.

Cerrar el menú móvil después de seleccionar una sección.

Selector de idioma

## Implementar soporte para dos idiomas:

Español.

Inglés.

Utilizar las banderas de España y Estados Unidos como identificadores visuales.

El selector debe ser desplegable y permitir cambiar el idioma de todos los textos de la interfaz, no solamente del menú.

Requisitos:

Español como idioma predeterminado.

Inglés como segundo idioma.

Mantener la estructura y el diseño al cambiar de idioma.

Guardar la preferencia del usuario en localStorage.

Centralizar las traducciones en una estructura de datos JavaScript para facilitar su mantenimiento.

Selector de tema

## Implementar modo claro y modo oscuro.

Requisitos:

Utilizar un botón con iconos de sol y luna.

Adaptar fondos, textos, bordes, tarjetas y elementos interactivos.

Mantener suficiente contraste en ambos temas.

Guardar la preferencia en localStorage.

Detectar el tema del sistema cuando no exista una preferencia guardada.

### 5. Sección: Inicio

Crear una sección Hero que funcione como presentación principal del portafolio.

Elementos:

Nombre profesional.

Cargo: Full Stack Developer.

Breve presentación profesional.

Botón para explorar proyectos.

Botón para contactar.

Elemento visual complementario relacionado con desarrollo de software.

El contenido inicial debe utilizar textos provisionales (placeholders) que posteriormente serán reemplazados por información personal definitiva.

La sección debe captar la atención sin perder el carácter profesional.

### 6. Sección: Sobre mí

Crear una sección destinada a presentar mi perfil profesional.

Por el momento, utilizar Lorem Ipsum o textos provisionales para establecer la estructura visual.

Incluir espacios para:

Presentación personal.

Formación académica.

Enfoque profesional.

Experiencia práctica.

Intereses en desarrollo de software e inteligencia artificial.


### 7. Sección: Tecnologías y herramientas

Mostrar las tecnologías y herramientas mediante tarjetas, iconos o elementos visuales organizados por categorías.

Frontend

HTML5.

CSS3.

Tailwind CSS.

JavaScript.

React.

TypeScript.

Backend

Node.js.

Express.js.

Laravel.

Bases de datos

SQL.

MySQL.

PostgreSQL.

APIs y seguridad

APIs REST.

JWT.

Autenticación.

Autorización.

bcrypt.

Zod.

Inteligencia artificial

AI Agents.

Agent Skills.

MCP (Model Context Protocol).

Prompt Engineering.

Herramientas y tecnologías adicionales

Git.

GitHub.

Postman.

Prisma.

Diseño de la sección

Utilizar iconos representativos de cada tecnología.

Organizar los elementos en categorías claramente diferenciadas.

Mantener un diseño visual uniforme.

Incorporar efectos hover sutiles.

Evitar barras de progreso o porcentajes de dominio que no representen una evaluación real.

Priorizar la legibilidad y la identificación rápida de cada tecnología.

Para los iconos, utilizar SVG inline o recursos visuales disponibles sin incorporar dependencias de JavaScript.

### 8. Sección: Proyectos

Esta será una de las secciones más importantes del portafolio.

El objetivo es presentar mis proyectos de forma visual, organizada y profesional, permitiendo conocer tanto su apariencia como sus características técnicas.

Vista principal

## Selector de categorías

En la parte superior de la sección incluir un selector visual dividido en dos opciones:

Proyectos sin IA: proyectos desarrollados mediante tecnologías y metodologías tradicionales de desarrollo de software.

Proyectos con IA: proyectos que incorporan funcionalidades de inteligencia artificial, agentes, automatizaciones o integración de modelos de IA.

El selector debe funcionar como un sistema de pestañas (tabs), permitiendo alternar entre ambas categorías sin abandonar la sección.

Requisitos:

Mostrar claramente cuál categoría está seleccionada.

Aplicar una transición suave al cambiar de categoría.

Actualizar dinámicamente los proyectos mostrados.

Mantener el mismo diseño y estructura de tarjetas en ambas categorías.

Adaptarse correctamente a dispositivos móviles.

No duplicar código HTML innecesariamente.

Mostrar los proyectos mediante tarjetas organizadas verticalmente, una debajo de otra.

Cada tarjeta debe incluir:

Imagen o captura de pantalla del proyecto.

Nombre del proyecto.

Descripción breve.

Tecnologías utilizadas reutilizando los diseños de la seccion de tecnologias.

Botón o indicador para consultar los detalles.

## Interacción de las tarjetas

Al pasar el cursor sobre la imagen:

Mostrar una previsualización visual del proyecto.

Aplicar una transición suave.

Evitar efectos exagerados.

Al seleccionar una tarjeta:

Abrir una vista de detalles del proyecto.

Mostrar una descripción completa.

Permitir visualizar una galería de imágenes.

Mostrar las tecnologías utilizadas.

Incluir enlaces al repositorio de GitHub y a la versión desplegada, cuando estén disponibles.

Incorporar una opción para regresar al listado de proyectos.

La vista de detalles debe tener una jerarquía visual clara y permitir consultar toda la información sin saturar la interfaz.

Información de cada proyecto

Crear una plantilla reutilizable con los siguientes apartados:

Nombre del proyecto.

Descripción general.

Objetivo y problema que resuelve.

Funcionalidades principales.

Tecnologías utilizadas.

Arquitectura y estructura del proyecto.

Características técnicas relevantes.

Capturas de pantalla.

Retos técnicos y soluciones implementadas.

Repositorio de GitHub.

Enlace al proyecto desplegado.

Proyectos iniciales

Preparar la estructura para incorporar los siguientes proyectos:

E-commerce Full Stack.

Sistema de autenticación y autorización.

Aplicación de gestión de seguros.

Sistema de gestión de farmacia (Sofarmatic).

Utilizar descripciones provisionales y campos editables. No inventar funcionalidades ni características que no estén confirmadas.

La información de los proyectos debe estar separada de la estructura HTML, preferiblemente mediante objetos de JavaScript, para facilitar la incorporación y modificación de proyectos.

### 9. Sección: Contacto

Crear una sección sencilla, visualmente atractiva y orientada a facilitar el contacto profesional.

Incluir:

Correo electrónico.

GitHub.

LinkedIn.

Cada elemento debe tener:

Icono representativo.

Nombre de la plataforma.

Enlace correspondiente.

Efecto hover sutil.

Los enlaces externos deben abrirse de forma segura en una nueva pestaña cuando corresponda.

Utilizar datos provisionales hasta proporcionar los enlaces definitivos.

### 10. Organización del código

Mantener una estructura de archivos sencilla, ordenada y modular.



### 11. Experiencia de usuario y accesibilidad

Utilizar etiquetas HTML semánticas.

Incorporar textos alternativos en las imágenes.

Garantizar contraste adecuado.

Permitir navegación mediante teclado.

Utilizar estados focus visibles.

Evitar animaciones excesivas.

Respetar la preferencia prefers-reduced-motion.

Utilizar botones y enlaces según su propósito.

Evitar elementos interactivos sin funcionalidad.

### 12. Rendimiento y calidad

Optimizar el tamaño de las imágenes.

Utilizar formatos modernos como WebP cuando sea posible.

Aplicar lazy loading a imágenes que no sean visibles inicialmente.

Evitar código JavaScript innecesario.

Evitar duplicación de código.

Mantener nombres de variables y funciones descriptivos.

Comprobar el funcionamiento en distintos tamaños de pantalla.

Comprobar los selectores de idioma y tema.

Verificar que todos los enlaces funcionen correctamente.

### 13. Metodología de desarrollo

Antes de comenzar a programar:

Analizar estas instrucciones.

Definir la estructura visual del portafolio.

Proponer la organización de archivos.

Presentar un plan de implementación por etapas.

Desarrollar el proyecto por módulos y secciones, respetando el orden de la estructura definida.

No implementar todo de forma apresurada en un único archivo.

Antes de avanzar a una nueva etapa:

Comprobar que la etapa anterior funciona.

Revisar la consistencia visual.

Verificar que no se hayan introducido errores.

Mantener el código organizado.