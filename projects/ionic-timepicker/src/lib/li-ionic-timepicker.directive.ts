import { Directive, HostListener, ElementRef, Renderer, Input, OnInit } from '@angular/core';
import { IonicTimepickerModalComponent } from './ionic-timepicker-modal/ionic-timepicker-modal.component';
import { ModalController } from '@ionic/angular';
import { NgModel, NgControl } from '@angular/forms';

@Directive({
  selector: '[liIonicTimepicker]',
  exportAs: 'liIonicTimepicker',
  providers: [NgModel]
})
export class LiIonicTimepickerDirective implements OnInit {

  @Input('liIonicTimepicker') inputTimeConfig: any;

  isModalOpen: any = false;
  closeIcon;
  selectedTime: any;

  constructor(
    private modalCtrl: ModalController,
    public ngModel: NgModel,
    public control: NgControl,
    public el: ElementRef,
    public renderer: Renderer
  ) { }

  ngOnInit() {
    // console.log('this.inp', this.inputTimeConfig.clearButton);

    if (this.inputTimeConfig.clearButton !== false) {
      this.closeIcon = document.createElement('ion-icon');
      this.closeIcon.name = 'close-circle';
      this.closeIcon.className = 'clearButton';
      this.closeIcon.style.position = 'absolute';
      this.closeIcon.style.right = '8px';
      this.closeIcon.style.bottom = '30%';
      this.closeIcon.style.fontSize = '18px';
      this.closeIcon.style.zIndex = '5';
      this.closeIcon.style.color = '#A9A9A9';
      if (!this.ngModel.value || !this.control.control.value) {
        this.closeIcon.style.visibility = 'hidden';
      }
      if (this.el.nativeElement.parentNode.nodeName === 'ION-ITEM') {
        this.closeIcon.style.bottom = '12px';
      }
      this.el.nativeElement.parentNode.appendChild(this.closeIcon);

      this.renderer.listen(this.closeIcon, 'click', (event) => {
        // console.log('button clicks');
        this.selectedTime = '';
        this.control.control.setValue('');
        this.ngModel.update.emit('');
      });
    }

    const self = this;
    this.ngModel.valueChanges.subscribe((value) => {
      // console.log('ngModel value =>', value);
      self.selectedTime = value;
      if (self.inputTimeConfig.clearButton !== false) {
        if (!value) {
          self.closeIcon.style.visibility = 'hidden';
        } else {
          self.closeIcon.style.visibility = 'visible';
        }
      }
    });

    this.control.control.valueChanges.subscribe((value) => {
      // console.log('formcontrol value =>', value);
      self.selectedTime = value;
      if (self.inputTimeConfig.clearButton !== false) {
        if (!value) {
          self.closeIcon.style.visibility = 'hidden';
        } else {
          self.closeIcon.style.visibility = 'visible';
        }
      }
    });

    if (this.control.control.value) {
      this.selectedTime = this.control.control.value;
    }

    if (this.ngModel.value) {
      this.selectedTime = this.ngModel.value;
    }
  }

  // @HostListener('click')
  // onClick() {
  //   // console.log('on click of component =>', this.inputTimeConfig);
  //   if (!this.isModalOpen) {
  //     this.isModalOpen = true;
  //     this.openTimePicker();
  //   }
  // }

  @HostListener('ionFocus')
  onFocus() {
    // console.log('on focus of component =>', this.inputTimeConfig);
    if (!this.isModalOpen) {
      this.isModalOpen = true;
      this.openTimePicker();
    }
  }

  // open time picker
  async openTimePicker() {
    // console.log('open time picker modal calls');
    const myTimePickerModal = await this.modalCtrl.create({
      component: IonicTimepickerModalComponent,
      cssClass: 'li-ionic-timepicker',
      componentProps: { 'objConfig': this.inputTimeConfig, 'selectedTime': this.selectedTime }
    });
    await myTimePickerModal.present();

    myTimePickerModal.onDidDismiss()
      .then((data) => {
        this.isModalOpen = false;
        // console.log(data);
        if (data.data && data.data.time) {
          this.selectedTime = data.data.time;
          this.control.control.setValue(this.selectedTime);
          this.ngModel.update.emit(this.selectedTime);
        }
      });
  }
}
