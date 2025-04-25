import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-evaluation-modal',
  template: `
    <div class="evaluation-modal">
      <div class="modal-header">
        <h4 class="modal-title">Evaluation</h4>
        <button type="button" class="btn-close" (click)="dismiss()"></button>
      </div>
      <div class="modal-body">
        <p class="confirmation-text">Are you sure that you want to evaluate the plan?</p>
        <div class="modal-actions">
          <button class="btn btn-secondary" (click)="dismiss()">No</button>
          <button class="btn btn-primary" (click)="confirm()">Yes</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .evaluation-modal {
      padding: 24px;
      
      .modal-header {
        padding: 0 0 16px 0;
        border: none;
        
        .modal-title {
          font-size: 18px;
          font-weight: 600;
          color: #101828;
          margin: 0;
        }
        
        .btn-close {
          padding: 0;
          margin: 0;
          font-size: 24px;
          opacity: 0.7;
          
          &:hover {
            opacity: 1;
          }
        }
      }
      
      .modal-body {
        padding: 0;
        
        .confirmation-text {
          font-size: 14px;
          color: #475467;
          margin-bottom: 24px;
        }
        
        .modal-actions {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          
          .btn {
            padding: 8px 16px;
            font-size: 14px;
            font-weight: 500;
            border-radius: 8px;
            
            &.btn-secondary {
              background: white;
              color: #344054;
              border: 1px solid #D0D5DD;
              
              &:hover {
                background: #F9FAFB;
              }
            }
            
            &.btn-primary {
              background: #7F56D9;
              color: white;
              border: 1px solid #7F56D9;
              
              &:hover {
                background: #6941C6;
              }
            }
          }
        }
      }
    }
  `]
})
export class EvaluationModalComponent {
  constructor(private activeModal: NgbActiveModal) {}

  dismiss() {
    this.activeModal.dismiss();
  }

  confirm() {
    this.activeModal.close(true);
  }
} 