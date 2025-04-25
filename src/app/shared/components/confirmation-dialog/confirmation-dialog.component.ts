import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirmation-dialog',
  template: `
    <div class="modal-content">
      <div class="modal-header">
        <h2>{{ title }}</h2>
        <button class="close-button" (click)="onClose()">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
      <div class="modal-body">
        <p class="dialog-message">{{ message }}</p>
      </div>
      <div class="modal-footer">
        <button class="btn-cancel" (click)="onCancel()">{{ cancelText }}</button>
        <button class="btn-confirm" (click)="onConfirm()">{{ confirmText }}</button>
      </div>
    </div>
  `,
  styles: [`
    .modal-content {
      border-radius: 12px;
      border: none;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
      max-width: 400px;
      margin: 0 auto;
    }

    .modal-header {
      padding: 24px;
      border-bottom: 1px solid #E4E7EC;
      display: flex;
      justify-content: space-between;
      align-items: center;

      h2 {
        margin: 0;
        font-size: 20px;
        font-weight: 600;
        color: #101828;
      }

      .close-button {
        width: 32px;
        height: 32px;
        border-radius: 8px;
        background: #F4F3FF;
        border: none;
        padding: 0;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #6C5CE7;
        transition: all 0.2s;

        &:hover {
          background: #E9E8FF;
        }

        svg {
          width: 20px;
          height: 20px;
        }
      }
    }

    .modal-body {
      padding: 32px 24px;
      text-align: center;

      .dialog-message {
        color: #667085;
        font-size: 16px;
        line-height: 1.5;
        margin: 0;
      }
    }

    .modal-footer {
      padding: 24px;
      border-top: 1px solid #E4E7EC;
      display: flex;
      justify-content: center;
      gap: 12px;

      button {
        padding: 10px 18px;
        border-radius: 8px;
        font-weight: 500;
        font-size: 14px;
        cursor: pointer;
        min-width: 80px;
        transition: all 0.2s;

        &.btn-cancel {
          background: white;
          border: 1px solid #D0D5DD;
          color: #344054;

          &:hover {
            background: #F9FAFB;
          }
        }

        &.btn-confirm {
          background: #6C5CE7;
          border: 1px solid #6C5CE7;
          color: white;

          &:hover {
            background: #5A4BC4;
          }
        }
      }
    }
  `]
})
export class ConfirmationDialogComponent {
  @Input() title: string = 'Confirmation';
  @Input() message: string = 'Are you sure?';
  @Input() confirmText: string = 'Yes';
  @Input() cancelText: string = 'No';

  constructor(public activeModal: NgbActiveModal) {}

  onConfirm() {
    this.activeModal.close(true);
  }

  onCancel() {
    this.activeModal.dismiss(false);
  }

  onClose() {
    this.activeModal.dismiss('close');
  }
} 