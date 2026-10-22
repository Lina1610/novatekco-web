/**
 * CONFIGURACIÓN DEL SITIO
 * -----------------------
 * Este es el único archivo que necesitas editar para personalizar
 * tu marca y tus datos de contacto.
 *
 * Los campos de contacto vacíos ('') no se muestran como enlaces activos:
 * la página indica que están pendientes de configurar.
 */
export interface SiteConfig {
  /** Nombre de tu marca o tu nombre profesional. */
  brandName: string;
  /** Parte final del nombre que se resalta en color (ej. 'CO' en 'NovatekCO'). Vacío = sin resaltar. */
  brandAccent: string;
  /** Logo (PNG con fondo transparente) dentro de la carpeta public/. */
  logo: string;
  /** Frase corta que acompaña a la marca. */
  tagline: string;
  /**
   * Número de WhatsApp en formato internacional, solo dígitos y sin "+".
   * Ejemplo de formato: código de país + número → '573001234567'.
   */
  whatsappNumber: string;
  /** Mensaje con el que se abre la conversación de WhatsApp. */
  whatsappDefaultMessage: string;
  /** Correo electrónico de contacto. */
  email: string;
  /** URL completa de tu perfil de GitHub, ej. 'https://github.com/tu-usuario'. */
  githubUrl: string;
}

export const SITE_CONFIG: SiteConfig = {
  brandName: 'NovatekCO',
  brandAccent: 'CO',
  logo: 'logo-emblema.png',
  tagline: 'Soluciones digitales',
  whatsappNumber: '573102048931',
  whatsappDefaultMessage: 'Hola NovatekCO, vi su página y me gustaría solicitar una cotización.',
  email: 'lescobarhiguera@gmail.com',
  githubUrl: 'https://github.com/Lina1610',
};
