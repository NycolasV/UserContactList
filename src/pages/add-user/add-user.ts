import { Component } from '@angular/core';
import { IonicPage, Loading, LoadingController, NavController, NavParams } from 'ionic-angular';
import { UserModel } from '../../models/user-model';
import { UserProvider } from '../../providers/user.provider';

@IonicPage()
@Component({
  selector: 'page-add-user',
  templateUrl: 'add-user.html',
})
export class AddUserPage {

  loading: Loading;

  constructor(
    private navCtrl: NavController, 
    private navParams: NavParams,
    private loadingController: LoadingController,
    private provider: UserProvider) {

      this.instanceScreen();
  }

  instanceScreen() {
    this.loading = this.loadingController.create({
      content: 'Carregando...'
    });

    this.loading.dismiss();
  }

  createUser() {
    
    this.navCtrl.pop()
  }
}
