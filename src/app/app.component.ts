import { ChangeDetectionStrategy, Component, afterNextRender } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { ProcessComponent } from './components/process/process.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeaderComponent,
    HeroComponent,
    ServicesComponent,
    PortfolioComponent,
    TechnologiesComponent,
    ProcessComponent,
    ContactComponent,
    FooterComponent,
  ],
  template: `
    <a class="skip-link" href="#contenido">Saltar al contenido</a>
    <app-header />
    <main id="contenido" tabindex="-1">
      <app-hero />
      <app-services />
      <app-portfolio />
      <app-technologies />
      <app-process />
      <app-contact />
    </main>
    <app-footer />
  `,
})
export class AppComponent {
  constructor() {
    // Las secciones se renderizan después de cargar la página, así que el navegador
    // no puede saltar solo a un enlace directo como /#contacto. Lo hacemos aquí.
    afterNextRender(() => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (id) {
        document.getElementById(id)?.scrollIntoView({ behavior: 'instant' });
      }
    });
  }
}
