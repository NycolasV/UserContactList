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
import { ContactListPageModule } from '../pages/contact-list/contact-list.module';
import { UserModel } from '../models/user-model';
import { CepModel } from '../models/cep-model';
import { Toasts } from '../utils/toasts';
import { Dictionary } from '../utils/dictionary';
import { AddContactPageModule } from '../pages/add-contact/add-contact.module';
import { SeeContactPageModule } from '../pages/see-contact/see-contact.module';
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
    ContactListPageModule,
    AddContactPageModule,
    SeeContactPageModule,
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
