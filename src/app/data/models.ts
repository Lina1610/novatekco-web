import { IconName } from '../shared/icon.component';

export interface NavLink {
  id: string;
  label: string;
}

export interface Service {
  icon: IconName;
  title: string;
  description: string;
  features: string[];
}

export interface Project {
  title: string;
  /** Tipo de solución, se muestra sobre el título (ej. 'Sistema personalizado'). */
  category: string;
  description: string;
  /** Captura de pantalla dentro de public/. Vacío = se usa la ilustración de `preview`. */
  image: string;
  technologies: string[];
  /** true = tarjeta de ejemplo, no es un proyecto real ni de un cliente. */
  isDemo: boolean;
  /** URL de la demostración en vivo. Vacío = "Demo próximamente". */
  demoUrl: string;
  /** URL del repositorio. Vacío = no se muestra el botón. */
  repoUrl: string;
  /** Variante visual de la ilustración de la tarjeta. */
  preview: 'catalog' | 'dashboard' | 'landing';
}

export interface Technology {
  name: string;
  /** Abreviatura mostrada en la insignia. */
  short: string;
  /** Color de acento de la insignia. */
  color: string;
}

export interface TechGroup {
  title: string;
  description: string;
  items: Technology[];
}

export interface ProcessStep {
  icon: IconName;
  title: string;
  description: string;
}
