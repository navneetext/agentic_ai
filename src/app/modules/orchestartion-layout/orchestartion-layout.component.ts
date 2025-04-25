import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import Drawflow from 'drawflow';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SourceModelComponent } from '../../shared/components/source-model/source-model.component';
import { ConfirmationDialogComponent } from '../../shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-orchestartion-layout',
  templateUrl: './orchestartion-layout.component.html',
  styleUrls: ['./orchestartion-layout.component.scss']
})
export class OrchestartionLayoutComponent implements OnInit, AfterViewInit {
  @ViewChild('drawflow') drawflowElement!: ElementRef;
  editor: any;
  isGlobalShare = false;
  isSourcePanelVisible = false;
  zoomLevel = 100;
  minZoom = 50;
  maxZoom = 200;
  zoomStep = 10;
  activeButton: 'test' | 'evaluate' | 'debug' | null = null;
  currentSection: string = 'overview';
  showSuccessPopup = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.route.url.subscribe(segments => {
      if (segments.length > 0) {
        this.currentSection = segments[0].path;
      }
    });
  }

  ngAfterViewInit() {
    this.initDrawflow();
    this.addInitialNodes();
  }

  private initDrawflow() {
    this.editor = new Drawflow(this.drawflowElement.nativeElement);
    this.editor.start();

    // Add event listeners
    this.editor.on('nodeCreated', (id: string) => {
      console.log('Node created', id);
    });

    this.editor.on('nodeRemoved', (id: string) => {
      console.log('Node removed', id);
    });

    this.editor.on('nodeSelected', (id: string) => {
      console.log('Node selected', id);
    });
  }

  private addInitialNodes() {
    // Add Agent-1
    const agent1Data = {
      name: 'Agent-1',
      title: 'Video Processing Specialist',
      description: 'Ingest and process the video from {video_url} by extracting frames, on-screen text, and audio stream for further analysis.'
    };
    this.addAgentNode(agent1Data, 100, 200);

    // Add Agent-2
    const agent2Data = {
      name: 'Agent-2',
      title: 'Transcription Analyzer',
      description: 'Transcribe the audio extracted from {video_url} and generate timeline markers, while identifying dates, topics, players, and key events.'
    };
    this.addAgentNode(agent2Data, 500, 200);

    // Add Agent-3
    const agent3Data = {
      name: 'Agent-3',
      title: 'Document Aggregation Expert',
      description: 'Develop an interactive query interface that allows users to ask questions by timeline or topic based on the constructed.'
    };
    this.addAgentNode(agent3Data, 900, 200);
  }

  private addAgentNode(data: any, posX: number, posY: number) {
    const nodeHtml = `
      <div class="agent-node-content">
        <div class="agent-name">${data.name}</div>
        <div class="agent-title">${data.title}</div>
        <div class="agent-description">${data.description}</div>
        <button class="task-button">
          Task
          <span class="plus-icon">+</span>
        </button>
      </div>
    `;

    const nodeId = this.editor.addNode(
      'agent',
      2, // Number of inputs
      2, // Number of outputs
      posX,
      posY,
      'agent-node',
      data,
      nodeHtml
    );

    return nodeId;
  }

  onNodeClick(event: MouseEvent) {
    console.log('Node clicked', event);
  }

  onBack(): void {
    this.router.navigate(['/']);
  }

  navigateToSection(section: string): void {
    this.router.navigate(['/orchestration', section]);
  }

  toggleGlobalShare(): void {
    this.isGlobalShare = !this.isGlobalShare;
  }

  onTest(): void {
    this.activeButton = 'test';
    const modalRef = this.modalService.open(SourceModelComponent, {
      size: 'lg',
      windowClass: 'source-model-popup',
      container: '.main-content',
      modalDialogClass: 'source-dialog',
      backdropClass: 'source-backdrop',
      animation: false
    });

    modalRef.result.finally(() => {
      this.activeButton = null;
    });
  }

  onDeploy(): void {
    // Implement deploy functionality
    console.log('Deploy clicked');
  }

  onEvaluate(): void {
    this.activeButton = 'evaluate';
    const modalRef = this.modalService.open(ConfirmationDialogComponent, {
      centered: true,
      backdrop: 'static',
      windowClass: 'evaluation-modal-window',
      modalDialogClass: 'evaluation-dialog'
    });

    modalRef.componentInstance.title = 'Evaluation';
    modalRef.componentInstance.message = 'Do you want to run evaluation?';
    modalRef.componentInstance.confirmText = 'Yes';
    modalRef.componentInstance.cancelText = 'No';
    modalRef.componentInstance.iconClass = 'icon-evaluate';

    modalRef.result.then(
      (result) => {
        if (result === true) {
          this.router.navigate(['/evaluation']);
        }
      },
      () => {
        console.log('Evaluation cancelled');
      }
    ).finally(() => {
      this.activeButton = null;
    });
  }

  onDebug(): void {
    this.activeButton = 'debug';
    // Implement debug functionality
    console.log('Debug clicked');
  }

  onSave(): void {
    // Implement save functionality
    console.log('Save clicked');
  }

  onPublish(): void {
    // Implement publish functionality
    console.log('Publish clicked');
  }

  addNewChat(): void {
    // Implement add new chat functionality
    console.log('Add new chat clicked');
  }

  zoomIn(): void {
    if (this.zoomLevel < this.maxZoom) {
      this.zoomLevel += this.zoomStep;
      this.editor.zoom_in();
    }
  }

  zoomOut(): void {
    if (this.zoomLevel > this.minZoom) {
      this.zoomLevel -= this.zoomStep;
      this.editor.zoom_out();
    }
  }

  toggleFullscreen(): void {
    const element = document.querySelector('.agent-flow') as HTMLElement;
    if (element) {
      if (!document.fullscreenElement) {
        element.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    }
  }

  toggleSourcePanel(event: Event) {
    event.stopPropagation();
    this.isSourcePanelVisible = !this.isSourcePanelVisible;
  }

  @HostListener('document:click')
  onDocumentClick() {
    if (this.isSourcePanelVisible) {
      this.isSourcePanelVisible = false;
    }
  }

  onPublishAgent() {
    // Add your publish logic here
    this.showSuccessPopup = true;
  }

  showPublishSuccess() {
    this.showSuccessPopup = true;
    setTimeout(() => {
      this.showSuccessPopup = false;
    }, 3000); // Auto-hide after 3 seconds
  }

  viewAgentStatus() {
    this.showSuccessPopup = false;
    // Add navigation logic here if needed
  }

  showSuccess() {
    this.showSuccessPopup = true;
    setTimeout(() => {
      this.showSuccessPopup = false;
    }, 5000); // Auto-hide after 5 seconds
  }
}
