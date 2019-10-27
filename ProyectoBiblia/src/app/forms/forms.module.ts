import { FormTutorialPageComponent } from './pages/form-tutorial/form-tutorial.component';
import { FormTutorialComponent } from './components/form-tutorial/form-tutorial.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormTutorialComponent } from './components/reactive-form-tutorial/reactive-form-tutorial.component';
import { ResultsComponent } from './components/results/results.component';
import { ValidationTutorialComponent } from './components/validation-tutorial/validation-tutorial.component';
import { CodeComponent } from './components/code/code.component';


@NgModule({
  declarations: [
    FormTutorialPageComponent,
    FormTutorialComponent,
    ReactiveFormTutorialComponent,
    ResultsComponent,
    ValidationTutorialComponent,
    CodeComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class FormsTutorialModule { }
