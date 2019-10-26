import { FormTutorialPageComponent } from './pages/form-tutorial/form-tutorial.component';
import { FormTutorialComponent } from './components/form-tutorial/form-tutorial.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormTutorialComponent } from './components/reactive-form-tutorial/reactive-form-tutorial.component';


@NgModule({
  declarations: [
    FormTutorialPageComponent,
    FormTutorialComponent,
    ReactiveFormTutorialComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class FormsTutorialModule { }
