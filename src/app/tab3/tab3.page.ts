import { Component} from '@angular/core';
import {PopoverPage} from './popover/popover.page';
import {PopoverController} from '@ionic/angular';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page{
  constructor(
      private popoverController:PopoverController
  ) {}

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverPage,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

}
