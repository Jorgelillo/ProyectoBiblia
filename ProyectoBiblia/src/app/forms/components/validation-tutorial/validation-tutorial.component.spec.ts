import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationTutorialComponent } from './validation-tutorial.component';

describe('ValidationTutorialComponent', () => {
  let component: ValidationTutorialComponent;
  let fixture: ComponentFixture<ValidationTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
