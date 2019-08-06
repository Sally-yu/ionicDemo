import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Tab2Page} from './tab2.page';
import {jqxBarGaugeModule} from 'jqwidgets-ng/jqxbargauge';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        jqxBarGaugeModule,
        RouterModule.forChild([{path: '', component: Tab2Page}])
    ],
    declarations: [Tab2Page]
})
export class Tab2PageModule {
}
