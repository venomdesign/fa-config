import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ExampleComponent } from './fa/fa.component';
import { ButtonsComponent } from './components/buttons/buttons.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule, ExampleComponent, ButtonsComponent],
  templateUrl: './app.component.html', // External template
  styleUrls: ['./app.component.css'], // External styles (optional)
})
export class AppComponent {}
