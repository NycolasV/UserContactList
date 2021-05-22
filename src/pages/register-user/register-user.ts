import { Component } from '@angular/core';
import { IonicPage, Loading, LoadingController, NavController, NavParams } from 'ionic-angular';
import { UserModel } from '../../models/user-model';
import { UserProvider } from '../../providers/user.provider';
import { ContactListPage } from '../contact-list/contact-list';

@IonicPage()
@Component({
  selector: 'page-register-user',
  templateUrl: 'register-user.html',
})
export class RegisterUserPage {

  loading: Loading;
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;

  constructor(
    private navCtrl: NavController, 
    private navParams: NavParams,
    private provider: UserProvider,
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
    
    if (this.password != this.confirmPassword) {
      console.log('Senhas não coincidem');
      return;
    }

    this.provider.saveUser(new UserModel(this.name, this.email, this.phone,  null, this.password));

    this.navCtrl.push(ContactListPage)
  }
}
