import { Injectable } from '@angular/core';
import {ToastController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(public toastController: ToastController) { }

  async presentToast(info,color?,duration?,position?) {
    const toast = await this.toastController.create({
      message: info,
      duration: duration?duration:1500,
      position:position?position:'top',
      color:color?color:'success',
    });
    toast.present();
  }
}
