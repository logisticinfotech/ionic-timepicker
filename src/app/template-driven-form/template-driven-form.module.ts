import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TemplateDrivenFormPage } from './template-driven-form.page';
// import { IonicTimepickerModule } from '../../../projects/ionic-timepicker/src/lib/ionic-timepicker.module';
import { IonicTimepickerModule } from 'ionic-timepicker';

const routes: Routes = [
  {
    path: '',
    component: TemplateDrivenFormPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicTimepickerModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TemplateDrivenFormPage]
})
export class TemplateDrivenFormPageModule {}
