import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
// import { Ionic4TimepickerModule } from '../../../projects/ionic4-timepicker/src/lib/ionic4-timepicker.module';
import { Ionic4TimepickerModule } from 'ionic4-timepicker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ionic4TimepickerModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
