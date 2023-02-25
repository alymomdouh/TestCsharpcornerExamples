import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormHomeComponent } from './components/form-home/form-home.component';
import { UserAddressInfoComponent } from './components/user-address-info/user-address-info.component';
import { ParentFormComponent } from './components/parent-form/parent-form.component';


@NgModule({
  declarations: [
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    FormHomeComponent,
    UserAddressInfoComponent,
    ParentFormComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FormModule { }
