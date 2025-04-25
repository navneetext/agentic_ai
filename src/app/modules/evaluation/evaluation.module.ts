import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EvaluationComponent } from './evaluation.component';
import { EvaluationRoutingModule } from './evaluation-routing.module';
import { LayoutModule } from '../../layout/layout.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    EvaluationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    EvaluationRoutingModule,
    LayoutModule,
    SharedModule
  ],
  exports: [
    EvaluationComponent
  ]
})
export class EvaluationModule { } 