import { FormsRoutingModule } from './forms/forms-routing.module';
import { FormsTutorialModule } from './forms/forms.module';
import { ExampleRoutingModule } from './example/example-routing.module';
import { ExampleModule } from './example/example.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserModule,
    AngularFontAwesomeModule,
    // Imports for example Module.
    ExampleRoutingModule,
    ExampleModule,
    // Imports for forms Module.
    FormsRoutingModule,
    FormsTutorialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
