import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { Demo1Page } from './demo1.page';
import { jqxGridModule} from 'jqwidgets-ng/jqxgrid';

const routes: Routes = [
  {
    path: '',
    component: Demo1Page
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
  declarations: [Demo1Page]
})
export class Demo1PageModule {}
