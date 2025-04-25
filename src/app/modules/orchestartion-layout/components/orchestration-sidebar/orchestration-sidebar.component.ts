import { Component } from '@angular/core';

@Component({
  selector: 'app-orchestration-sidebar',
  templateUrl: './orchestration-sidebar.component.html',
  styleUrls: ['./orchestration-sidebar.component.scss']
})
export class OrchestrationSidebarComponent {
  menuItems = [
    { text: 'Overview', route: '/orchestration/overview' },
    { text: 'Workflows', route: '/orchestration/workflows' },
    { text: 'Agents', route: '/orchestration/agents' },
    { text: 'Tools', route: '/orchestration/tools' },
    { text: 'Settings', route: '/orchestration/settings' }
  ];
} 