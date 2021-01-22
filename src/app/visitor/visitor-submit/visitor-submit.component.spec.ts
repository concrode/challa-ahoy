import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorSubmitComponent } from './visitor-submit.component';

describe('VisitorSubmitComponent', () => {
  let component: VisitorSubmitComponent;
  let fixture: ComponentFixture<VisitorSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
