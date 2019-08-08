import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';
import {Storage} from '@ionic/storage';

@Component({
    selector: 'app-user',
    templateUrl: './user.page.html',
    styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
    userLogin;

    constructor(
        private router: Router,
        public alertController:AlertController,
        private storage:Storage,
    ) {
    }

    async presentAlertConfirm() {
        const alert = await this.alertController.create({
            header: '',
            message: '确定退出当前账号？',
            buttons: [
                {
                    text: '取消',
                    handler: () => {
                    }
                }, {
                    text: '确定',
                    handler: () => {
                        this.logout();
                    }
                }
            ]
        });
        await alert.present();
    }

    ngOnInit() {

    }

    //页面展示后 ionic生命周期
    ionViewWillEnter(){
        this.storage.get('username').then(res=>{
            console.log(res);
            this.userLogin = (res == 'demouser');
        });
        console.log('ionViewWillEnter')
    }

    logout() {
        this.storage.remove('username');
        this.router.navigate(['/tabs']);
    }

    login() {
        this.router.navigate(['/login']);
    }


}
