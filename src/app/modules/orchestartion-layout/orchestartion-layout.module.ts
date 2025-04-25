import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { OrchestartionLayoutComponent } from './orchestartion-layout.component';
import { OrchestartionLayoutRoutingModule } from './orchestartion-layout-routing.module';
import { LayoutModule } from '../../layout/layout.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    OrchestartionLayoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgbModule,
    OrchestartionLayoutRoutingModule,
    LayoutModule,
    SharedModule
  ],
  exports: [
    OrchestartionLayoutComponent
  ]
})
export class OrchestartionLayoutModule { } 