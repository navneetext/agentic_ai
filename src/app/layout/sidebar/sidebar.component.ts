import { Component, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isSidebar = false;
  constructor(
    private readonly renderer: Renderer2,
    private readonly router: Router, private activatedRoute: ActivatedRoute
  ) { }
  toggleSidebar(): void {
    const body = this.renderer.selectRootElement('body', true);
    if (this.isSidebar) {
      this.renderer.removeClass(body, 'sidebar-active');
    } else {
      this.renderer.addClass(body, 'sidebar-active');
    }
    this.isSidebar = !this.isSidebar;
  }
}
