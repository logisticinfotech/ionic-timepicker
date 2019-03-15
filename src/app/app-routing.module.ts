import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'reactive-form',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'reactive-form',
    loadChildren: './reactive-form/reactive-form.module#ReactiveFormPageModule'
  },
  {
    path: 'template-driven-form',
    loadChildren: './template-driven-form/template-driven-form.module#TemplateDrivenFormPageModule'
  },
  {
    path: 'timepicker-directive',
    loadChildren: './timepicker-directive/timepicker-directive.module#TimepickerDirectivePageModule'
  },
  {
    path: 'timepicker-component',
    loadChildren: './timepicker-component/timepicker-component.module#TimepickerComponentPageModule'
  },
  {
    path: 'timepicker-button',
    loadChildren: './timepicker-button/timepicker-button.module#TimepickerButtonPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
