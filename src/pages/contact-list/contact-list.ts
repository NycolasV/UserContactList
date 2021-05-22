import { Component } from '@angular/core';
import { IonicPage, Loading, LoadingController, NavController, NavParams } from 'ionic-angular';
import { UserModel } from '../../models/user-model';
import { UserProvider } from '../../providers/user.provider';
import { AddContactPage } from '../add-contact/add-contact';
import { SeeContactPage } from '../see-contact/see-contact';

@IonicPage()
@Component({
  selector: 'page-lists',
  templateUrl: 'contact-list.html',
})
export class ContactListPage {

  loading: Loading;
  users: UserModel[];

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

    // this.users = this.provider.getUsers();

    var user = new UserModel("Nycolas Vieira", "teste@teste.com", "(11) 989371260", null, null);
    this.users = [user, user, user, user, user, user, user, user, user, user]

    this.loading.dismiss();
  }

  async openDetails(user: UserModel) {

    this.navCtrl.push(SeeContactPage, { user: user });
  }

  addUser() {

    this.navCtrl.push(AddContactPage)
  }
}
