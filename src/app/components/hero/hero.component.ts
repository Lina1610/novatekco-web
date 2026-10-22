import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SITE_CONFIG } from '../../config/site.config';
import { IconComponent } from '../../shared/icon.component';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  protected readonly brand = SITE_CONFIG.brandName;
  protected readonly tagline = SITE_CONFIG.tagline;
  protected readonly highlights = ['Diseño adaptable', 'Código mantenible', 'Comunicación directa'];
}
