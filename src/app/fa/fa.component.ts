import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './fa.component.html', // External template
  styleUrls: ['./fa.component.css'], // External styles (optional)
})
export class ExampleComponent {}
