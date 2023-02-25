import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormHomeComponent } from './components/form-home/form-home.component';


@NgModule({
  declarations: [
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    FormHomeComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FormModule { }
