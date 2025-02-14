import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  sidebarBtn?: Element | null;
  sidebar?: Element | null;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    if (typeof document !== 'undefined') {
      this.sidebarBtn = document.querySelector(".toggle-btn");
      this.sidebar = document.querySelector("nav");

      if (this.sidebarBtn) {
        this.renderer.listen(this.sidebarBtn, 'click', () => {
          console.log('Sidebar button clicked'); // Debugging line
          if (this.sidebar) {
            if (this.sidebar.classList.contains('active')) {
              this.renderer.removeClass(this.sidebar, 'active');
            } else {
              this.renderer.addClass(this.sidebar, 'active');
            }
          }
        });
      }
    }
  }
}
