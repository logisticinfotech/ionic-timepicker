import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { IonicTimepickerModule } from '../../../projects/ionic-timepicker/src/lib/ionic-timepicker.module';
// import { IonicTimepickerModule } from 'ionic-timepicker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicTimepickerModule,
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
