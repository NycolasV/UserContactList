import { Component } from '@angular/core';
import { IonicPage, Loading, NavController} from 'ionic-angular';
import { ContactListPage } from '../contact-list/contact-list';
import { RegisterUserPage } from '../register-user/register-user';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loading: Loading;

  constructor(private navCtrl: NavController) {
  }

  goToLoginPage() {
   
    this.navCtrl.push(ContactListPage);
  }

  async goToRegisterPage() {

    this.navCtrl.push(RegisterUserPage);
  }
}
