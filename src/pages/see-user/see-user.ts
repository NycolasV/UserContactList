import { Component } from '@angular/core';
import { IonicPage, Loading, LoadingController, NavController, NavParams, ToastController } from 'ionic-angular';
import { UserModel } from '../../models/user-model';
import { UserProvider } from '../../providers/user.provider';
import { Toasts } from '../../utils/toasts';
import { AddUserPage } from '../add-user/add-user';

@IonicPage()
@Component({
  selector: 'page-see-user',
  templateUrl: 'see-user.html',
})
export class SeeUserPage {

  loading: Loading;

  constructor(
    private navCtrl: NavController, 
    private navParams: NavParams,
    private loadingController: LoadingController,
    private provider: UserProvider,
    private toastCtrl: ToastController,
    private toasts: Toasts) {

      this.toasts = new Toasts(this.toastCtrl);

      this.instanceScreen();
  }

  instanceScreen() {
    this.loading = this.loadingController.create({
      content: 'Carregando...'
    });

    this.loading.dismiss();
  }

  editUser() {

    this.navCtrl.push(AddUserPage)
  }

  async deleteUser() {

    await this.toasts.presentToast('In Development')
  }
}
