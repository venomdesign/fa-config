import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ExampleComponent } from './fa/fa.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CardComponent } from './components/card/card.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { SidenavComponent } from './components/layout/sidenav/sidenav.component';
import { HeaderComponent } from "./components/layout/header/header.component";
import { ContentComponent } from "./components/layout/content/content.component";
import { FooterComponent } from "./components/layout/footer/footer.component";
import { PageHeaderComponent } from './components/layout/page/page-header/page-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule, ExampleComponent, ButtonsComponent, CardComponent, AccordionComponent, SidenavComponent, HeaderComponent, ContentComponent, FooterComponent, PageHeaderComponent],
  templateUrl: './app.component.html', // External template
  styleUrls: ['./app.component.css'], // External styles (optional)
})
export class AppComponent {}
