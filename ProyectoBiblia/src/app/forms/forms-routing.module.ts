import { FormTutorialPageComponent } from './pages/form-tutorial/form-tutorial.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const formRoutes: Routes = [
  { path: 'forms', component: FormTutorialPageComponent },
 ];

@NgModule({
  imports: [RouterModule.forChild(formRoutes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
