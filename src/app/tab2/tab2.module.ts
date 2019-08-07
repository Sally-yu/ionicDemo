import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Tab2Page} from './tab2.page';
import {PopoverPage} from './popover/popover.page';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([{path: '', component: Tab2Page}])
    ],
    declarations: [Tab2Page,PopoverPage],
    entryComponents:[PopoverPage]
})
export class Tab2PageModule {
}
