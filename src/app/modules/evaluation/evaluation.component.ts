import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationDialogComponent } from '../../shared/components/confirmation-dialog/confirmation-dialog.component';

export interface Metric {
  name: string;
  dataset?: string;
  evaluationRubric?: string;
}

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.scss']
})
export class EvaluationComponent implements OnInit {
  currentStep: number = 1;
  completedSteps: number[] = [];
  showConfirmDialog = false;
  selectedMetricForEvaluation: string = '';
  
  // Response Text Quality Metrics
  selectedMetric: string = '';
  selectedDataset: string = '';
  responseMetrics: Metric[] = [];
  
  // Execution Metrics
  selectedExecutionMetric: string = '';
  selectedExecutionDataset: string = '';
  executionMetrics: Metric[] = [];
  
  // Effectiveness Metrics
  selectedEffectivenessMetric: string = '';
  selectedEffectivenessDataset: string = '';
  selectedRubric: string = '';
  effectivenessMetrics: Metric[] = [];

  // Additional Metrics
  additionalMetrics = [
    { id: 'all', label: 'All', checked: false },
    { id: 'track_execution', label: 'Track Execution Time & Cost', checked: false },
    { id: 'adversarial', label: 'Enable Adversarial Testing', checked: false },
    { id: 'track_resource', label: 'Track Resource Use', checked: false },
    { id: 'test_stability', label: 'Test Stability', checked: false }
  ];

  // Safety Metrics
  selectedSafetyMetric: string = '';
  selectedSafetyDataset: string = '';
  safetyMetrics: Metric[] = [];

  constructor(
    private location: Location,
    private router: Router,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    // Initialize metrics arrays
    this.responseMetrics = [
      { name: 'Coherence' },
      { name: 'Language Formality' },
      { name: 'Verbosity' },
      { name: 'Grammar Accuracy' },
      { name: 'Content Relevance' }
    ];

    this.executionMetrics = [
      { name: 'Trajectory exact match', dataset: 'Dataset_01' },
      { name: 'Trajectory recall', dataset: 'Dataset_03' },
      { name: 'Reasoning coherence', dataset: 'Dataset_02' },
      { name: 'Execution accuracy', dataset: 'Dataset_01' },
      { name: 'Performance speed', dataset: 'Dataset_02' }
    ];

    this.effectivenessMetrics = [
      { name: 'Correctness', dataset: 'Dataset_01', evaluationRubric: 'File_01.pdf' },
      { name: 'Completeness', dataset: 'Dataset_05', evaluationRubric: 'File_01.pdf' },
      { name: 'Precision', dataset: 'Dataset_09', evaluationRubric: 'File_01.pdf' },
      { name: 'Recall', dataset: 'Dataset_02', evaluationRubric: 'Rubric.doc' },
      { name: 'F1 Score', dataset: 'Dataset_03', evaluationRubric: 'Rubric.doc' }
    ];

    this.safetyMetrics = [
      { name: 'Bias Detection', dataset: 'Dataset_01' },
      { name: 'Fairness Assessment', dataset: 'Dataset_02' },
      { name: 'Robustness Testing', dataset: 'Dataset_03' }
    ];
  }

  onBack() {
    this.router.navigate(['/']);
  }

  goToStep(step: number) {
    if (step <= Math.max(...this.completedSteps, this.currentStep)) {
      this.currentStep = step;
    }
  }

  nextStep() {
    if (this.currentStep < 3) {
      if (!this.completedSteps.includes(this.currentStep)) {
        this.completedSteps.push(this.currentStep);
      }
      this.currentStep++;
    }
  }

  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  isStepCompleted(step: number): boolean {
    return this.completedSteps.includes(step);
  }

  addMetric() {
    if (this.selectedMetric && this.selectedDataset) {
      this.responseMetrics.push({ name: this.selectedMetric });
    }
  }

  deleteMetric(metrics: any[], metric: any): void {
    const index = metrics.indexOf(metric);
    if (index > -1) {
      metrics.splice(index, 1);
    }
  }

  addSafetyMetric() {
    if (this.selectedSafetyMetric && this.selectedSafetyDataset) {
      this.safetyMetrics.push({
        name: this.selectedSafetyMetric,
        dataset: this.selectedSafetyDataset
      });
      this.selectedSafetyMetric = '';
      this.selectedSafetyDataset = '';
    }
  }

  deleteSafetyMetric(metric: Metric) {
    const index = this.safetyMetrics.indexOf(metric);
    if (index > -1) {
      this.safetyMetrics.splice(index, 1);
    }
  }

  handleMetricChange(event: Event, metricId: string) {
    const checked = (event.target as HTMLInputElement).checked;
    this.onMetricChange(metricId, checked);
  }

  onMetricChange(metricId: string, checked: boolean) {
    if (metricId === 'all') {
      this.toggleAllMetrics(checked);
    } else {
      const index = this.additionalMetrics.findIndex(m => m.id === metricId);
      if (index !== -1) {
        this.additionalMetrics[index].checked = checked;
      }
    }
  }

  onSubmit() {
    const modalRef = this.modalService.open(ConfirmationDialogComponent, {
      centered: true,
      backdrop: 'static',
      windowClass: 'evaluation-modal-window',
      modalDialogClass: 'evaluation-dialog'
    });

    modalRef.componentInstance.title = 'Start Evaluation';
    modalRef.componentInstance.message = 'Are you sure you want to start the evaluation with the selected metrics?';
    modalRef.componentInstance.confirmText = 'Start';
    modalRef.componentInstance.cancelText = 'Cancel';
    modalRef.componentInstance.iconClass = 'icon-play';

    modalRef.result.then(
      (result) => {
        if (result === true) {
          this.startEvaluation();
        }
      }
    );
  }

  private startEvaluation() {
    console.log('Starting evaluation with metrics:', 
      this.additionalMetrics.filter(m => m.checked).map(m => m.label)
    );
    // Add your evaluation logic here
  }

  onCloseDialog() {
    this.showConfirmDialog = false;
  }

  onCancelEvaluation() {
    this.showConfirmDialog = false;
  }

  onConfirmEvaluation() {
    this.startEvaluation();
    this.showConfirmDialog = false;
  }

  private toggleAllMetrics(checked: boolean) {
    this.additionalMetrics = this.additionalMetrics.map(metric => ({
      ...metric,
      checked: checked && metric.id !== 'all'
    }));
    this.additionalMetrics[0].checked = checked; // Update 'All' checkbox
  }

  // Method to check if we're on the first step
  isFirstStep(): boolean {
    return this.currentStep === 1;
  }

  // Method to check if we're on the last step
  isLastStep(): boolean {
    return this.currentStep === 3;
  }

  addExecutionMetric(): void {
    if (this.selectedExecutionMetric && this.selectedExecutionDataset) {
      this.executionMetrics.push({
        name: this.selectedExecutionMetric,
        dataset: this.selectedExecutionDataset
      });
    }
  }

  addEffectivenessMetric(): void {
    if (this.selectedEffectivenessMetric && this.selectedEffectivenessDataset) {
      this.effectivenessMetrics.push({
        name: this.selectedEffectivenessMetric,
        dataset: this.selectedEffectivenessDataset,
        evaluationRubric: 'File_01.pdf'
      });
    }
  }
} 