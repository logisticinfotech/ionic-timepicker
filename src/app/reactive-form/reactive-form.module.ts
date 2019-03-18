import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReactiveFormPage } from './reactive-form.page';
// import { IonicTimepickerModule } from '../../../projects/ionic-timepicker/src/lib/ionic-timepicker.module';
import { IonicTimepickerModule } from 'ionic-timepicker';

const routes: Routes = [
  {
    path: '',
    component: ReactiveFormPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    IonicTimepickerModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReactiveFormPage]
})
export class ReactiveFormPageModule {}
