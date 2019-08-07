import { Injectable } from '@angular/core';
import {ToastController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(public toastController: ToastController) { }

  async presentToast(info) {
    const toast = await this.toastController.create({
      message: info,
      duration: 1500,
      position:'top',
      color:'success',
    });
    toast.present();
  }
}
