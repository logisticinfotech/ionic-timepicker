import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Ionic4TimepickerComponent } from './ionic4-timepicker.component';
import { LiIonic4TimepickerDirective } from './li-ionic4-timepicker.directive';
import { Ionic4TimepickerModalComponent } from './ionic4-timepicker-modal/ionic4-timepicker-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  entryComponents: [
    // Ionic4TimepickerComponent,
    Ionic4TimepickerModalComponent
  ],
  declarations: [
    Ionic4TimepickerComponent,
    Ionic4TimepickerModalComponent,
    LiIonic4TimepickerDirective
  ],
  exports: [
    FormsModule,
    CommonModule,
    Ionic4TimepickerComponent,
    LiIonic4TimepickerDirective,
    Ionic4TimepickerModalComponent
  ]
})
export class Ionic4TimepickerModule { }
