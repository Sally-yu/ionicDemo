import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Demo2Page } from './demo2.page';
import {jqxFormComponent} from 'jqwidgets-ng/jqxform';


const routes: Routes = [
  {
    path: '',
    component: Demo2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Demo2Page,jqxFormComponent]
})
export class Demo2PageModule {}
