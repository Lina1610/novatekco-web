import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROJECTS } from '../../data/site-content';
import { IconComponent } from '../../shared/icon.component';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-portfolio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, RevealDirective],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  protected readonly projects = PROJECTS;
  protected readonly hasDemos = PROJECTS.some((project) => project.isDemo);
}
