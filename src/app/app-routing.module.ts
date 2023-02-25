import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './modules/shared/components/default/default.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"/main",
    pathMatch: 'full'
  },
  {
    path:"main",
    component: DefaultComponent
  },
  {
    path: 'forms',
    loadChildren: () => import('./modules/forms/form.module').then(m => m.FormModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
