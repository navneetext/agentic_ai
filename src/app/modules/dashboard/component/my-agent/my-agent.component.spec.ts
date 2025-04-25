import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAgentComponent } from './my-agent.component';

describe('MyAgentComponent', () => {
  let component: MyAgentComponent;
  let fixture: ComponentFixture<MyAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyAgentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
