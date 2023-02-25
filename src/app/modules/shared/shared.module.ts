import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedRoutingModule } from './shared-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { DefaultComponent } from './components/default/default.component';


@NgModule({
  declarations: [
    DefaultComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    SharedRoutingModule,
    HttpClientModule
  ]
})
export class SharedModule { }
