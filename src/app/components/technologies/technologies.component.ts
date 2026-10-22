import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TECH_GROUPS } from '../../data/site-content';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-technologies',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss',
})
export class TechnologiesComponent {
  protected readonly groups = TECH_GROUPS;
}
