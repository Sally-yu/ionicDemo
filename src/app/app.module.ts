import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {LoginPage} from './login/login.page';
import { AppMinimize } from '@ionic-native/app-minimize/ngx';
import { HttpClientModule} from '@angular/common/http';
import {IonicStorageModule} from '@ionic/storage';


@NgModule({
    declarations: [AppComponent,LoginPage],
    entryComponents: [],
    imports: [BrowserModule, FormsModule, IonicModule.forRoot({mode:'ios'}), AppRoutingModule,HttpClientModule, IonicStorageModule.forRoot()

    ],
    providers: [
        StatusBar,
        SplashScreen,
        AppMinimize,
        HttpClientModule,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
