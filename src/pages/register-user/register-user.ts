import { Component } from '@angular/core';
import { IonicPage, Loading, LoadingController, NavController, NavParams } from 'ionic-angular';
import { UserListPage } from '../user-list/user-list';

@IonicPage()
@Component({
  selector: 'page-register-user',
  templateUrl: 'register-user.html',
})
export class RegisterUserPage {

  loading: Loading;

  constructor(
    private navCtrl: NavController, 
    private navParams: NavParams,
    private loadingController: LoadingController) {

      this.instanceScreen();
  }

  instanceScreen() {
    this.loading = this.loadingController.create({
      content: 'Carregando...'
    });

    this.loading.dismiss();
  }

  createUser() {
    
    this.navCtrl.push(UserListPage)
  }
}
