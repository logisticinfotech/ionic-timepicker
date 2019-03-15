import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  myTime;
  myTime1;
  // myTime = '11:22 AM';
  // myTime = '22:35';
  timePickerObj: any = {};

  constructor() {
  }

  ngOnInit() {
    // EXAMPLE OBJECT
    var myDate = new Date();
    myDate.setHours(23, 12, 13);
    this.timePickerObj = {
      inputTime: myDate, // default currentTime
      // inputTime: '11:01 PM', // for 12 hour time in timePicker
      // inputTime: '23:12', // for 24 hour time in timePicker

      momentLocale: 'ar', // default 'en-US'
      // timeFormat: 'kk:mm', // default 'hh:mm A'
      timeFormat: 'hh:mm A',
      // timeFormat: 'HH:mm',
      // step: '3', // default 5
      setLabel: 'Set1', // default 'Set'
      closeLabel: 'Close1', // default 'Close'
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
}

