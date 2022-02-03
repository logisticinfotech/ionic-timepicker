import { Component, OnInit, forwardRef, Input, ElementRef, Renderer2 } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { IonicTimepickerModalComponent } from './ionic-timepicker-modal/ionic-timepicker-modal.component';

const noop = () => {
};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => IonicTimepickerComponent),
  multi: true,
};

@Component({
  selector: 'li-ionic-timepicker',
  templateUrl: './ionic-timepicker.component.html',
  styleUrls: ['./ionic-timepicker.component.scss'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})

export class IonicTimepickerComponent implements OnInit, ControlValueAccessor {

  @Input() inputTimeConfig: any;

  closeIcon;
  private innerValue: any = '';
  selectedTime: any;

  // Placeholders for the callbacks which are later provided
  // by the Control Value Accessor
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  constructor(
    public modalCtrl: ModalController,
    public el: ElementRef,
    public renderer: Renderer2
  ) { }

  ngOnInit() {
    if (this.inputTimeConfig.clearButton !== false) {
      this.closeIcon = document.createElement('ion-icon');
      this.closeIcon.name = 'close-circle';
      this.closeIcon.className = 'clearButton';
      this.closeIcon.style.position = 'absolute';
      this.closeIcon.style.right = '8px';
      this.closeIcon.style.bottom = '0px';
      this.closeIcon.style.fontSize = '18px';
      this.closeIcon.style.zIndex = '5';
      this.closeIcon.style.color = '#A9A9A9';
      if (!this.value) {
        this.closeIcon.style.visibility = 'hidden';
      }
      if (this.el.nativeElement.parentNode.nodeName === 'ION-ITEM') {
        this.closeIcon.style.bottom = '30%';
      }
      this.el.nativeElement.setAttribute('style', 'position: relative; width: 100%;');
      this.el.nativeElement.appendChild(this.closeIcon);

      this.renderer.listen(this.closeIcon, 'click', (event) => {
        // console.log('button clicks');
        this.selectedTime = '';
        this.value = '';
      });
    }
  }

  // calls when input value has been changed.
  onChangeValue(value) {
    // console.log('onChangeValue =>' , value);
    if (this.inputTimeConfig.clearButton || this.inputTimeConfig.clearButton === undefined) {
      if (!value) {
        this.closeIcon.style.visibility = 'hidden';
      } else {
        this.closeIcon.style.visibility = 'visible';
      }
    }
  }

  // open time picker
  async openTimePicker(value) {
    // console.log('open time picker modal calls');
    if (value) {
      this.selectedTime = value;
    }

    const myTimePickerModal = await this.modalCtrl.create({
      component: IonicTimepickerModalComponent,
      cssClass: 'li-ionic-timepicker',
      componentProps: { 'objConfig': this.inputTimeConfig, 'selectedTime': this.selectedTime }
    });
    await myTimePickerModal.present();

    myTimePickerModal.onDidDismiss()
      .then((data) => {
        // console.log(data);
        if (data.data && data.data.time) {
          this.selectedTime = data.data.time;
          this.value = data.data.time;
        }
      });
  }

  // get accessor
  get value(): any {
    return this.innerValue;
  }

  // set accessor including call the onchange callback
  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }
    this.onChangeValue(v);
  }

  // Set touched on blur
  onBlur() {
    this.onTouchedCallback();
  }

  // From ControlValueAccessor interface
  writeValue(value: any) {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
    this.onChangeValue(value);
  }

  // From ControlValueAccessor interface
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  // From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }
}
