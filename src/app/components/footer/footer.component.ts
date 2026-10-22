import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SITE_CONFIG } from '../../config/site.config';
import { NAV_LINKS } from '../../data/site-content';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  protected readonly brand = SITE_CONFIG.brandName;
  protected readonly logo = SITE_CONFIG.logo;
  protected readonly tagline = SITE_CONFIG.tagline;
  protected readonly links = NAV_LINKS;
  protected readonly year = new Date().getFullYear();
}
