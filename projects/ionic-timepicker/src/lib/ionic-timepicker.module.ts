import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicTimepickerComponent } from './ionic-timepicker.component';
import { LiIonicTimepickerDirective } from './li-ionic-timepicker.directive';
import { IonicTimepickerModalComponent } from './ionic-timepicker-modal/ionic-timepicker-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  entryComponents: [
    // IonicTimepickerComponent,
    IonicTimepickerModalComponent
  ],
  declarations: [
    IonicTimepickerComponent,
    IonicTimepickerModalComponent,
    LiIonicTimepickerDirective
  ],
  exports: [
    FormsModule,
    CommonModule,
    IonicTimepickerComponent,
    LiIonicTimepickerDirective,
    IonicTimepickerModalComponent
  ]
})
export class IonicTimepickerModule { }
