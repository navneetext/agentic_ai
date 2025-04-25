import { Component, Input, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-source-model',
  templateUrl: './source-model.component.html',
  styleUrls: ['./source-model.component.scss']
})
export class SourceModelComponent {
  @Input() isVisible = false;
  activeTab: 'test' | 'log' = 'test';
  inputText: string = '';

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const clickedElement = event.target as HTMLElement;
    // Check if the clicked element is inside the component
    if (!this.elementRef.nativeElement.contains(clickedElement)) {
      this.close();
    }
  }

  onTabClick(event: Event, tab: 'test' | 'log') {
    event.stopPropagation(); // Prevent event from bubbling up
    this.activeTab = tab;
  }

  close() {
    this.isVisible = false;
  }

  onSend() {
    if (this.inputText.trim()) {
      console.log('Sending:', this.inputText);
      this.inputText = '';
    }
  }

  onCopy() {
    // Implement copy functionality
    console.log('Copying code...');
  }

  onEdit() {
    // Implement edit functionality
    console.log('Editing code...');
  }
} 