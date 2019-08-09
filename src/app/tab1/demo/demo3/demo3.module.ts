import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Demo3Page } from './demo3.page';
import {jqxGridModule} from 'jqwidgets-ng/jqxgrid';

const routes: Routes = [
  {
    path: '',
    component: Demo3Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    jqxGridModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Demo3Page]
})
export class Demo3PageModule {}
