import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormHomeComponent } from './components/form-home/form-home.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/forms-home',
    pathMatch: 'full'
  },
  {
    path: 'forms-home',
    //redirectTo: '/template-driven-form',
    component: FormHomeComponent
  },
  {
    path: "",
    children: [
      {
        path: '',
        redirectTo: '/template-driven-form',
        pathMatch: 'full'
      },
      {
        //canActivate: [RoleGuard],
        path: 'template-driven-form',
        component: TemplateDrivenFormComponent
      },
      {
        path: 'reactive-form',
        component: ReactiveFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
