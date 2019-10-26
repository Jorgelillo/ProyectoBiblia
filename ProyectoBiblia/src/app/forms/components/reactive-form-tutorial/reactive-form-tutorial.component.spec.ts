import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormTutorialComponent } from './reactive-form-tutorial.component';

describe('ReactiveFormTutorialComponent', () => {
  let component: ReactiveFormTutorialComponent;
  let fixture: ComponentFixture<ReactiveFormTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
