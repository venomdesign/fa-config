import { Component, Input } from '@angular/core';

@Component({
  selector: 'accordion',
  imports: [],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})
export class AccordionComponent {
  @Input() accordionType?: string;
  @Input() accordionTitle?: string;
}
