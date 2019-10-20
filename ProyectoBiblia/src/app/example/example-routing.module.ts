import { PageOneComponent } from './pages/page-one/page-one.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routesExample: Routes = [
  { path: 'example', component: PageOneComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routesExample)],
  exports: [RouterModule]
})
export class ExampleRoutingModule { }
