import { SITE_CONFIG } from '../config/site.config';

/** Construye los enlaces de contacto a partir de la configuración. Devuelven '' si no está configurado. */

export function whatsappLink(message = SITE_CONFIG.whatsappDefaultMessage): string {
  const number = SITE_CONFIG.whatsappNumber.replace(/\D/g, '');
  if (!number) {
    return '';
  }
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function emailLink(subject = '', body = ''): string {
  const email = SITE_CONFIG.email.trim();
  if (!email) {
    return '';
  }
  const params = new URLSearchParams();
  if (subject) {
    params.set('subject', subject);
  }
  if (body) {
    params.set('body', body);
  }
  // URLSearchParams codifica los espacios como "+", que algunos clientes de correo no interpretan.
  const query = params.toString().replace(/\+/g, '%20');
  return `mailto:${email}${query ? `?${query}` : ''}`;
}
