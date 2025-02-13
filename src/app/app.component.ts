import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ExampleComponent } from './fa/fa.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CardComponent } from './components/card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule, ExampleComponent, ButtonsComponent, CardComponent],
  templateUrl: './app.component.html', // External template
  styleUrls: ['./app.component.css'], // External styles (optional)
})
export class AppComponent {}
