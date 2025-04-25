import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SourceModelComponent } from './components/source-model/source-model.component';
import { EvaluationModalComponent } from './components/evaluation-modal/evaluation-modal.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [
    SourceModelComponent,
    EvaluationModalComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule
  ],
  exports: [
    SourceModelComponent,
    EvaluationModalComponent,
    ConfirmationDialogComponent
  ]
})
export class SharedModule { } 