import { ComponentOneComponent } from './components/component-one/component-one.component';
import { PageOneComponent } from './pages/page-one/page-one.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleRoutingModule } from './example-routing.module';


@NgModule({
  declarations: [
    PageOneComponent,
    ComponentOneComponent
  ],
  imports: [
    ExampleRoutingModule,
    CommonModule
  ]
})
export class ExampleModule { }
