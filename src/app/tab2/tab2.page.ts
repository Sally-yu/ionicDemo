import {Component, OnInit} from '@angular/core';
import {PopoverPage} from './popover/popover.page';
import {PopoverController} from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{


  constructor(
      private popoverController:PopoverController
  ) {}

  ngOnInit(): void {

  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverPage,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
}
