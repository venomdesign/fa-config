import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'button[bBtn]',
  imports: [FontAwesomeModule],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ButtonsComponent {
  @Input() label?: string;
}
