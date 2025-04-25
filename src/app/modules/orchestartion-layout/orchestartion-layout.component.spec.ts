import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrchestartionLayoutComponent } from './orchestartion-layout.component';

describe('OrchestartionLayoutComponent', () => {
  let component: OrchestartionLayoutComponent;
  let fixture: ComponentFixture<OrchestartionLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrchestartionLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrchestartionLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
