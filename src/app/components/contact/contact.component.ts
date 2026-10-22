import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { SITE_CONFIG } from '../../config/site.config';
import { SERVICES } from '../../data/site-content';
import { emailLink, whatsappLink } from '../../shared/contact-links';
import { IconComponent, IconName } from '../../shared/icon.component';
import { RevealDirective } from '../../shared/reveal.directive';

interface ContactChannel {
  icon: IconName;
  label: string;
  /** Texto visible (usuario, correo o número). */
  value: string;
  href: string;
  external: boolean;
}

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, RevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  protected readonly services = SERVICES.map((service) => service.title);

  protected readonly channels: ContactChannel[] = [
    {
      icon: 'whatsapp',
      label: 'WhatsApp',
      value: this.formatPhone(SITE_CONFIG.whatsappNumber),
      href: whatsappLink(),
      external: true,
    },
    {
      icon: 'mail',
      label: 'Correo electrónico',
      value: SITE_CONFIG.email,
      href: emailLink('Solicitud de cotización'),
      external: false,
    },
    {
      icon: 'github',
      label: 'GitHub',
      value: this.profileName(SITE_CONFIG.githubUrl),
      href: SITE_CONFIG.githubUrl,
      external: true,
    },
  ];

  protected readonly canUseWhatsapp = !!whatsappLink();
  protected readonly canUseEmail = !!emailLink();

  // Formulario de cotización: arma un mensaje y lo abre en WhatsApp o en el correo del visitante.
  // No se envía nada a ningún servidor.
  protected readonly name = signal('');
  protected readonly service = signal('');
  protected readonly details = signal('');
  protected readonly submitted = signal(false);

  protected readonly nameError = computed(() => (this.name().trim() ? '' : 'Escribe tu nombre.'));
  protected readonly detailsError = computed(() =>
    this.details().trim().length >= 10 ? '' : 'Describe brevemente tu proyecto (mínimo 10 caracteres).',
  );

  private readonly message = computed(() => {
    const lines = [`Hola, soy ${this.name().trim()}.`];
    if (this.service()) {
      lines.push(`Me interesa: ${this.service()}.`);
    }
    lines.push('', this.details().trim());
    return lines.join('\n');
  });

  protected sendBy(channel: 'whatsapp' | 'email'): void {
    this.submitted.set(true);
    if (this.nameError() || this.detailsError()) {
      const firstInvalid = this.nameError() ? 'cot-nombre' : 'cot-detalle';
      document.getElementById(firstInvalid)?.focus();
      return;
    }

    if (channel === 'whatsapp') {
      window.open(whatsappLink(this.message()), '_blank', 'noopener');
    } else {
      window.location.href = emailLink('Solicitud de cotización', this.message());
    }
  }

  protected readValue(event: Event): string {
    return (event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement).value;
  }

  /** '573102048931' → '+57 310 204 8931' (números de 10 dígitos más el código de país). */
  private formatPhone(raw: string): string {
    const digits = raw.replace(/\D/g, '');
    const match = digits.match(/^(\d{1,3})(\d{3})(\d{3})(\d{4})$/);
    return match ? `+${match[1]} ${match[2]} ${match[3]} ${match[4]}` : digits && `+${digits}`;
  }

  private profileName(url: string): string {
    return url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
  }
}
