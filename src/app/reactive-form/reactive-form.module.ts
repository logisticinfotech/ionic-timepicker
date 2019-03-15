import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReactiveFormPage } from './reactive-form.page';
// import { Ionic4TimepickerModule } from '../../../projects/ionic4-timepicker/src/lib/ionic4-timepicker.module';
import { Ionic4TimepickerModule } from 'ionic4-timepicker';

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
    Ionic4TimepickerModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReactiveFormPage]
})
export class ReactiveFormPageModule {}
