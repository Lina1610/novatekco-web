import { ChangeDetectionStrategy, Component, DestroyRef, afterNextRender, inject, signal } from '@angular/core';
import { SITE_CONFIG } from '../../config/site.config';
import { NAV_LINKS } from '../../data/site-content';
import { IconComponent } from '../../shared/icon.component';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  host: {
    '[class.scrolled]': 'scrolled()',
    '(window:scroll)': 'onScroll()',
    '(document:keydown.escape)': 'closeMenu()',
  },
})
export class HeaderComponent {
  protected readonly brand = SITE_CONFIG.brandName;
  protected readonly logo = SITE_CONFIG.logo;
  protected readonly tagline = SITE_CONFIG.tagline;
  protected readonly brandAccent =
    SITE_CONFIG.brandAccent && SITE_CONFIG.brandName.endsWith(SITE_CONFIG.brandAccent) ? SITE_CONFIG.brandAccent : '';
  protected readonly brandBase = SITE_CONFIG.brandName.slice(0, SITE_CONFIG.brandName.length - this.brandAccent.length);
  protected readonly links = NAV_LINKS;
  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);
  protected readonly activeId = signal(NAV_LINKS[0].id);

  constructor() {
    const destroyRef = inject(DestroyRef);

    // Resalta en el menú la sección visible en pantalla.
    afterNextRender(() => {
      this.onScroll();
      if (typeof IntersectionObserver === 'undefined') {
        return;
      }
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              this.activeId.set(entry.target.id);
            }
          }
        },
        { rootMargin: '-45% 0px -50% 0px' },
      );
      for (const link of this.links) {
        const section = document.getElementById(link.id);
        if (section) {
          observer.observe(section);
        }
      }
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }

  protected onScroll(): void {
    this.scrolled.set(window.scrollY > 12);
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
