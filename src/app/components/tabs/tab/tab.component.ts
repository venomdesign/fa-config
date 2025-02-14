import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
})
export class TabComponent {
  @Input() tabTitle!: string;
  @Input() tabIcon!: string;
  @Input() active: boolean = false;
}