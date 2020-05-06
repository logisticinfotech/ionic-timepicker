import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TimepickerButtonPage } from './timepicker-button.page';
import { IonicTimepickerModule } from '../../../projects/ionic-timepicker/src/lib/ionic-timepicker.module';
// import { IonicTimepickerModule } from 'ionic-timepicker';

const routes: Routes = [
  {
    path: '',
    component: TimepickerButtonPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicTimepickerModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TimepickerButtonPage]
})
export class TimepickerButtonPageModule { }
