import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TimepickerComponentPage } from './timepicker-component.page';
// import { Ionic4TimepickerModule } from '../../../projects/ionic4-timepicker/src/lib/ionic4-timepicker.module';
import { Ionic4TimepickerModule } from 'ionic4-timepicker';

const routes: Routes = [
  {
    path: '',
    component: TimepickerComponentPage
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
  declarations: [TimepickerComponentPage]
})
export class TimepickerComponentPageModule {}
