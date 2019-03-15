import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TimepickerButtonPage } from './timepicker-button.page';
import { Ionic4TimepickerModule } from 'ionic4-timepicker';

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
    Ionic4TimepickerModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TimepickerButtonPage]
})
export class TimepickerButtonPageModule { }
