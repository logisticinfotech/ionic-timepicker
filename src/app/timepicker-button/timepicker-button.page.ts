import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
// import { IonicTimepickerModule } from 'ionic-timepicker';
import { IonicTimepickerModule } from '../../../projects/ionic-timepicker/src/lib/ionic-timepicker.module';
// import { IonicTimepickerModalComponent } from 'ionic-timepicker';
import { IonicTimepickerModalComponent } from '../../../projects/ionic-timepicker/src/lib/ionic-timepicker-modal/ionic-timepicker-modal.component';

@Component({
  selector: 'app-timepicker-button',
  templateUrl: './timepicker-button.page.html',
  styleUrls: ['./timepicker-button.page.scss'],
})
export class TimepickerButtonPage implements OnInit {

  timePickerObj: any = {};
  selectedTime;

  constructor(
    public modalCtrl: ModalController
  ) { }

  ngOnInit() {
    // EXAMPLE OBJECT
    this.timePickerObj = {
      inputTime: new Date().setHours(23, 12, 13), // default currentTime
      // inputTime: '11:01 PM', // for 12 hour time in timePicker
      // inputTime: '23:01', // for 24 hour time in timePicker

      // momentLocale: 'pt-BR', // default 'en-US'
      // timeFormat: 'HH:mm:ss', // default 'hh:mm A'
      // step: '3', // default 5
      // setLabel: 'S', // default 'Set'
      // closeLabel: 'C', // default 'Close'
      titleLabel: 'Select a Time', // default 'Time'
      // clearButton: false, // default true
      // btnCloseSetInReverse: true, // default false

      btnProperties: {
        expand: 'block', // "block" | "full"
        fill: '', // "clear" | "default" | "outline" | "solid"
        size: '', // "default" | "large" | "small"
        disabled: '', // boolean (default false)
        strong: '', // boolean (default false)
        color: ''
        // "primary", "secondary", "tertiary", "success", "warning", "danger", "light", "medium", "dark" , and give color in string
      }
    };
  }

  async openTimePicker() {
    const timePickerModal = await this.modalCtrl.create({
      component: IonicTimepickerModalComponent,
      cssClass: 'li-ionic-timepicker',
      componentProps: { 'objConfig': this.timePickerObj }
      // componentProps: { 'objConfig': this.timePickerObj, 'selectedTime': this.selectedTime }
      // `selectedTime` attribute sets your time in timePicker.
    });
    await timePickerModal.present();

    timePickerModal.onDidDismiss()
      .then((data) => {
        // console.log(data);
        this.selectedTime = data.data.time;
      });
  }
}
