import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { Crop } from '@ionic-native/crop/ngx';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UserProvider } from '../providers/user.provider';
import { UserListPageModule } from '../pages/user-list/user-list.module';
import { UserModel } from '../models/user-model';
import { CepModel } from '../models/cep-model';
import { Toasts } from '../utils/toasts';
import { Dictionary } from '../utils/dictionary';
import { AddUserPageModule } from '../pages/add-user/add-user.module';
import { SeeUserPageModule } from '../pages/see-user/see-user.module';
import { RegisterUserPageModule } from '../pages/register-user/register-user.module';
import { LoginPageModule } from '../pages/login/login.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    UserListPageModule,
    AddUserPageModule,
    SeeUserPageModule,
    RegisterUserPageModule,
    LoginPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Crop,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    UserProvider,
    UserModel,
    CepModel,
    Toasts,
    Dictionary,
  ]
})
export class AppModule { }
