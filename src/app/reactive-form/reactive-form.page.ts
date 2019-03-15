import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.page.html',
  styleUrls: ['./reactive-form.page.scss'],
})
export class ReactiveFormPage implements OnInit {

  dataForm: FormGroup;
  timePickerObj: any = {};

  constructor(
    public formBuilder: FormBuilder
  ) {
    this.dataForm = formBuilder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      time: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
    // EXAMPLE OBJECT
    this.timePickerObj = {
      // inputTime: new Date().setHours(24, 0, 0), // default currentTime
      // inputTime: '11:01 PM', // for 12 hour time in timePicker
      // inputTime: '23:01', // for 24 hour time in timePicker

      // momentLocale: 'pt-BR', // default 'en-US'
      // timeFormat: 'kk:mm:ss', // default 'hh:mm A'
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

  onClickSubmit() {
    console.log('onClickSubmit', this.dataForm.value);
  }
}
