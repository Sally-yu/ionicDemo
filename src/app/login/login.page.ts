import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NavController, Platform} from '@ionic/angular';
import {AppMinimize} from '@ionic-native/app-minimize/ngx';
import {ToastService} from '../toast.service';
import {UrlService} from '../url.service';
import {Storage} from '@ionic/storage';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    loginMethod=0; //登录方式，0用户名密码，1手机短信验证码

    constructor(
        private router: Router,
        private platform: Platform,
        private native: AppMinimize,
        private toast:ToastService,
        private url:UrlService,
        private nav:NavController,
        private storage:Storage

    ) {
    }

    ngOnInit() {

    }

    login() {
        this.url.login().then(res=>{
            this.storage.remove('username');
            this.storage.set('username',res);
            this.router.navigate(['tabs']);
        },err=>{
            this.toast.presentToast("连接服务器失败")
        })
    }
}
