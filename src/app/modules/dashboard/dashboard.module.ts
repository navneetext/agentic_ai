import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { MyAgentComponent } from './component/my-agent/my-agent.component';
import { MyToolsComponent } from './component/my-tools/my-tools.component';
import { MyPlansComponent } from './component/my-plans/my-plans.component';


@NgModule({
  declarations: [
    DashboardComponent,
    MyAgentComponent,
    MyToolsComponent,
    MyPlansComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    TableModule
  ]
})
export class DashboardModule { }
