import { FormTutorialPageComponent } from './pages/form-tutorial/form-tutorial.component';
import { FormTutorialComponent } from './components/form-tutorial/form-tutorial.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormTutorialPageComponent,
    FormTutorialComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class FormsTutorialModule { }
