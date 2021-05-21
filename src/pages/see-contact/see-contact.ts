import { Component } from '@angular/core';
import { IonicPage, Loading, LoadingController, NavController, NavParams, ToastController } from 'ionic-angular';
import { UserModel } from '../../models/user-model';
import { UserProvider } from '../../providers/user.provider';
import { Toasts } from '../../utils/toasts';
import { AddContactPage } from '../add-contact/add-contact';

@IonicPage()
@Component({
  selector: 'page-see-contact',
  templateUrl: 'see-contact.html',
})
export class SeeContactPage {

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

    this.navCtrl.push(AddContactPage)
  }

  async deleteUser() {

    await this.toasts.presentToast('In Development')
  }
}
