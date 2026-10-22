# NovatekCO · Soluciones digitales

Sitio web de una sola página para presentar **NovatekCO** y sus servicios de desarrollo de software: inicio, servicios, portafolio, tecnologías, proceso de trabajo y contacto.

- **Angular 20** (componentes standalone, sin Zone.js), **TypeScript** y **SCSS**
- Sin backend, sin base de datos, sin librerías de UI externas
- Listo para publicar gratis en **Cloudflare Pages** desde **GitHub**

---

## 1. Requisitos

| Herramienta | Versión |
|---|---|
| [Node.js](https://nodejs.org/) | 20.19 o superior (recomendado: 22 LTS) |
| npm | Viene incluido con Node.js |
| [Git](https://git-scm.com/) | Cualquier versión reciente |

Para comprobar las versiones instaladas:

```bash
node -v
npm -v
```

## 2. Instalar y ejecutar en tu computador

```bash
# Dentro de la carpeta del proyecto
npm install      # descarga las dependencias (solo la primera vez)
npm start        # inicia el servidor de desarrollo
```

Abre **http://localhost:4200** en el navegador. Los cambios que guardes se ven al instante.

## 3. Personalizar tus datos

### Marca y contacto: `src/app/config/site.config.ts`

```ts
export const SITE_CONFIG: SiteConfig = {
  brandName: 'NovatekCO',
  brandAccent: 'CO',           // parte del nombre resaltada en cian
  logo: 'logo-emblema.png',    // PNG con fondo transparente dentro de public/
  tagline: 'Soluciones digitales',
  whatsappNumber: '573102048931', // código de país (57) + celular, sin "+" ni espacios
  whatsappDefaultMessage: 'Hola NovatekCO, vi su página y me gustaría solicitar una cotización.',
  email: 'lescobarhiguera@gmail.com',
  githubUrl: 'https://github.com/Lina1610',
};
```

Mientras un campo esté vacío, la página lo muestra como **"Pendiente de configurar"** y su botón queda desactivado, para que nunca haya enlaces rotos.

### Contenido: `src/app/data/site-content.ts`

Aquí están los servicios, las tecnologías, los pasos del proceso y los **proyectos**.

El portafolio muestra tres proyectos con su captura de pantalla (`public/projects/`): **Dental System**, **Carpintería a medida** y **El Buen Sabor**. Para agregar o editar uno:

```ts
{
  title: 'Nombre del proyecto',
  category: 'Aplicación web',                // texto pequeño sobre el título
  description: 'Qué hace y qué problema resuelve.',
  image: 'projects/mi-proyecto.jpg',         // captura en public/projects/ (vacío = ilustración genérica)
  technologies: ['Angular', 'Node.js', 'MySQL'], // vacío = no se muestra la lista
  isDemo: false,                             // true = tarjeta de ejemplo, muestra la etiqueta "Demostración"
  demoUrl: 'https://mi-demo.pages.dev',      // vacío = "Demo próximamente"
  repoUrl: 'https://github.com/...',         // vacío = no se muestra el botón
  preview: 'dashboard',                      // ilustración si no hay imagen: 'catalog' | 'dashboard' | 'landing'
}
```

Para las capturas usa imágenes JPG de unos 960 px de ancho (menos de 100 KB) para que la página cargue rápido.

### SEO: `src/index.html`

El `<title>`, la `description`, `keywords`, `author` y las etiquetas `og:*` ya están con los datos de NovatekCO.

Cuando tengas la dirección definitiva del sitio, cambia la imagen para redes sociales por una URL completa, porque WhatsApp y Facebook no aceptan rutas relativas:

```html
<meta property="og:image" content="https://tu-proyecto.pages.dev/logo-512.png">
```

### Logo

- `public/logo-emblema.png`: emblema "N" sin fondo, usado en el menú y el pie de página
- `public/logo-96.png`: ícono de la pestaña del navegador (logo circular completo)
- `public/logo-192.png`: ícono al guardar el sitio en la pantalla de inicio del celular
- `public/logo-512.png`: imagen al compartir el enlace en redes
- `branding/novatekco-logo-original.png`: original en alta resolución (no se publica)
- `branding/novatekco-emblema-transparente.png`: emblema sin fondo en alta resolución (no se publica)

### Colores

Las variables de color están al inicio de `src/styles.scss` (`:root`).

### Sobre el formulario de cotización

El formulario **no envía datos a ningún servidor**. Arma el mensaje con lo que escribe el visitante y lo abre en **WhatsApp** o en su **aplicación de correo**, donde el visitante decide si enviarlo. La página lo explica junto al formulario.

## 4. Compilar para producción

```bash
npm run build
```

Los archivos listos para publicar quedan en:

```
dist/portafolio/browser
```

Esa es la carpeta que se configura en Cloudflare Pages.

## 5. Publicar gratis en Cloudflare Pages con GitHub

### 5.1 Subir el proyecto a GitHub

1. Crea un repositorio **vacío** en [github.com/new](https://github.com/new) (sin README ni .gitignore).
2. En la carpeta del proyecto:

```bash
git init
git add .
git commit -m "Primera versión del sitio de NovatekCO"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/TU-REPOSITORIO.git
git push -u origin main
```

> El archivo `.gitignore` ya excluye `node_modules` y `dist`, que no se deben subir.

### 5.2 Conectar Cloudflare Pages

1. Entra a [dash.cloudflare.com](https://dash.cloudflare.com) (la cuenta gratuita es suficiente).
2. Ve a **Workers & Pages → Create → Pages → Connect to Git**.
   (Si solo ves la opción de crear un *Worker*, busca el enlace para crear un proyecto de **Pages** e importar un repositorio).
3. Autoriza GitHub y elige tu repositorio.
4. Configura la compilación **exactamente así**:

| Campo | Valor |
|---|---|
| Framework preset | `None` (o `Angular`, revisando los campos de abajo) |
| Production branch | `main` |
| Build command | `npm run build` |
| Build output directory | `dist/portafolio/browser` |
| Root directory | *(dejar vacío)* |

5. Pulsa **Save and Deploy**. En uno o dos minutos tendrás una dirección como `https://tu-proyecto.pages.dev`.

**Versión de Node:** el archivo `.node-version` le indica a Cloudflare que use Node 22. Si la compilación falla por la versión de Node, agrega la variable de entorno `NODE_VERSION` = `22` en **Settings → Variables and Secrets** y vuelve a desplegar.

### 5.3 Actualizaciones

Cada `git push` a `main` vuelve a publicar el sitio automáticamente:

```bash
git add .
git commit -m "Actualizo proyectos"
git push
```

### 5.4 Dominio propio (opcional)

En el proyecto de Pages: **Custom domains → Set up a custom domain**.

## 6. Estructura del proyecto

```
├── public/                       # Se copia tal cual a la compilación
│   ├── _headers                  # Cabeceras de seguridad y caché (Cloudflare)
│   ├── logo-emblema.png          # Emblema sin fondo (menú y pie)
│   ├── logo-96.png / logo-192.png / logo-512.png
│   ├── projects/                 # Capturas de los proyectos del portafolio
│   └── robots.txt
├── branding/                     # Logo original (no se publica)
├── src/
│   ├── index.html                # HTML base + SEO
│   ├── main.ts                   # Arranque de Angular
│   ├── styles.scss               # Estilos globales, colores y utilidades
│   ├── styles/
│   │   ├── _variables.scss       # Fuentes, medidas y breakpoints
│   │   └── _mixins.scss          # Mixins responsive y de tarjetas
│   └── app/
│       ├── app.component.ts      # Une todas las secciones
│       ├── app.config.ts
│       ├── config/
│       │   └── site.config.ts    # ← TUS DATOS (marca y contacto)
│       ├── data/
│       │   ├── models.ts         # Tipos de datos
│       │   └── site-content.ts   # ← TU CONTENIDO (servicios, proyectos…)
│       ├── shared/
│       │   ├── icon.component.ts     # Iconos SVG en línea
│       │   ├── reveal.directive.ts   # Animación al hacer scroll
│       │   └── contact-links.ts      # Enlaces de WhatsApp y correo
│       └── components/
│           ├── header/           # Menú fijo, menú móvil, sección activa
│           ├── hero/             # Inicio
│           ├── services/         # Servicios
│           ├── portfolio/        # Portafolio
│           ├── technologies/     # Tecnologías
│           ├── process/          # Proceso de trabajo
│           ├── contact/          # Contacto y formulario de cotización
│           └── footer/
├── angular.json
├── package.json
├── tsconfig.json / tsconfig.app.json
├── .node-version / .nvmrc        # Versión de Node para Cloudflare
└── README.md
```

## 7. Accesibilidad y rendimiento

- Enlace "Saltar al contenido", navegación por teclado, foco visible y `Esc` para cerrar el menú móvil
- Etiquetas ARIA en el menú, el formulario y los enlaces que se abren en una pestaña nueva
- Las animaciones se desactivan si el sistema tiene activado "reducir movimiento"
- Paquete inicial de aproximadamente 50 kB comprimido, sin librerías de UI ni de iconos

## 8. Scripts disponibles

| Comando | Qué hace |
|---|---|
| `npm start` | Servidor de desarrollo en `http://localhost:4200` |
| `npm run build` | Compilación de producción en `dist/portafolio/browser` |
| `npm run watch` | Compila en modo desarrollo y recompila al guardar |
