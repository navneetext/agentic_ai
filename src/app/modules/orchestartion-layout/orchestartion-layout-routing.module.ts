import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrchestartionLayoutComponent } from './orchestartion-layout.component';

const routes: Routes = [
  {
    path: '',
    component: OrchestartionLayoutComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: OrchestartionLayoutComponent },
      { path: 'workflows', component: OrchestartionLayoutComponent },
      { path: 'agents', component: OrchestartionLayoutComponent },
      { path: 'tools', component: OrchestartionLayoutComponent },
      { path: 'settings', component: OrchestartionLayoutComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrchestartionLayoutRoutingModule { } 