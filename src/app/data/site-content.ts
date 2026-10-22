import { NavLink, ProcessStep, Project, Service, TechGroup } from './models';

export const NAV_LINKS: NavLink[] = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'portafolio', label: 'Portafolio' },
  { id: 'tecnologias', label: 'Tecnologías' },
  { id: 'proceso', label: 'Proceso' },
  { id: 'contacto', label: 'Contacto' },
];

export const SERVICES: Service[] = [
  {
    icon: 'globe',
    title: 'Páginas web',
    description: 'Sitios rápidos, adaptables a cualquier pantalla y preparados para aparecer en buscadores.',
    features: ['Diseño responsive', 'SEO básico', 'Carga optimizada'],
  },
  {
    icon: 'catalog',
    title: 'Catálogos digitales',
    description: 'Muestra tus productos o servicios de forma ordenada, con filtros y enlaces directos para pedidos.',
    features: ['Categorías y filtros', 'Fichas de producto', 'Pedidos por WhatsApp'],
  },
  {
    icon: 'app',
    title: 'Aplicaciones web',
    description: 'Herramientas interactivas que funcionan desde el navegador, sin instalaciones.',
    features: ['Interfaces modernas', 'Usuarios y roles', 'Escalables'],
  },
  {
    icon: 'layers',
    title: 'Sistemas personalizados',
    description: 'Software diseñado alrededor de los procesos reales de tu negocio.',
    features: ['Análisis de requerimientos', 'Automatización', 'Reportes'],
  },
  {
    icon: 'form',
    title: 'Formularios',
    description: 'Formularios claros y validados para registros, solicitudes, encuestas o inscripciones.',
    features: ['Validaciones', 'Accesibles', 'Integrables'],
  },
  {
    icon: 'dashboard',
    title: 'Módulos administrativos',
    description: 'Paneles para gestionar información, inventarios, clientes o contenido de tu sitio.',
    features: ['CRUD completo', 'Tablas y búsquedas', 'Control de acceso'],
  },
  {
    icon: 'database',
    title: 'Bases de datos',
    description: 'Diseño, modelado y optimización de bases de datos relacionales.',
    features: ['Modelado', 'Consultas eficientes', 'MySQL y SQL Server'],
  },
];

/**
 * PROYECTOS
 * - image: captura en public/projects/ (vacío = ilustración genérica según `preview`).
 * - technologies: completa con las tecnologías reales de cada proyecto
 *   (si la lista está vacía, la tarjeta no muestra esa sección).
 * - demoUrl / repoUrl: vacío = "Demo próximamente" / sin botón de código.
 * - isDemo: true solo para tarjetas de ejemplo que no son proyectos reales.
 */
export const PROJECTS: Project[] = [
  {
    title: 'Dental System',
    category: 'Sistema personalizado',
    description:
      'Sistema de gestión para consultorio odontológico: agenda, citas, pacientes, odontólogos, servicios, facturación y reportes, con un panel de indicadores del periodo.',
    image: 'projects/dental-system.jpg',
    technologies: [],
    isDemo: false,
    demoUrl: '',
    repoUrl: '',
    preview: 'dashboard',
  },
  {
    title: 'Carpintería a medida',
    category: 'Página web',
    description:
      'Sitio web para un taller de carpintería que fabrica muebles, cocinas y closets: presentación de servicios, proyectos, solicitud de cotización y contacto por WhatsApp.',
    image: 'projects/carpinteria.jpg',
    technologies: [],
    isDemo: false,
    demoUrl: '',
    repoUrl: '',
    preview: 'landing',
  },
  {
    title: 'El Buen Sabor',
    category: 'Aplicación web',
    description:
      'Sitio web para un asadero y parrilla: menú de platos con precios, sección institucional, reserva de mesas e inicio de sesión.',
    image: 'projects/el-buen-sabor.jpg',
    technologies: [],
    isDemo: false,
    demoUrl: '',
    repoUrl: '',
    preview: 'catalog',
  },
];

export const TECH_GROUPS: TechGroup[] = [
  {
    title: 'Frontend',
    description: 'Interfaces rápidas, accesibles y adaptables.',
    items: [
      { name: 'Angular', short: 'Ng', color: '#dd0031' },
      { name: 'TypeScript', short: 'TS', color: '#3178c6' },
      { name: 'JavaScript', short: 'JS', color: '#e8c63a' },
      { name: 'HTML', short: 'H5', color: '#e44d26' },
      { name: 'CSS', short: 'C3', color: '#2965f1' },
      { name: 'SCSS', short: 'Sa', color: '#cd6799' },
      { name: 'Bootstrap', short: 'Bs', color: '#7952b3' },
      { name: 'PrimeNG', short: 'Pn', color: '#20c997' },
    ],
  },
  {
    title: 'Backend',
    description: 'Lógica de negocio, APIs y servicios.',
    items: [
      { name: 'Java', short: 'Jv', color: '#f89820' },
      { name: 'Python', short: 'Py', color: '#4b8bbe' },
      { name: 'Node.js', short: 'Nd', color: '#5fa04e' },
      { name: 'Express', short: 'Ex', color: '#a3a8c6' },
    ],
  },
  {
    title: 'Bases de datos',
    description: 'Información segura y bien estructurada.',
    items: [
      { name: 'MySQL', short: 'My', color: '#4479a1' },
      { name: 'SQL Server', short: 'SQ', color: '#cc2927' },
    ],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    icon: 'chat',
    title: 'Consulta',
    description: 'Conversamos sobre tu idea, tus objetivos y lo que necesita tu negocio.',
  },
  {
    icon: 'file',
    title: 'Propuesta',
    description: 'Recibes una propuesta con alcance, tiempos estimados y costo.',
  },
  {
    icon: 'code',
    title: 'Desarrollo',
    description: 'Construimos la solución por etapas y te mostramos avances periódicos.',
  },
  {
    icon: 'shield',
    title: 'Pruebas',
    description: 'Verificamos funcionamiento, rendimiento y adaptación a distintos dispositivos.',
  },
  {
    icon: 'rocket',
    title: 'Entrega',
    description: 'Publicación, entrega de accesos y acompañamiento en el arranque.',
  },
];
