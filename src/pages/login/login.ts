import { Component } from '@angular/core';
import { IonicPage, Loading, NavController} from 'ionic-angular';
import { UserListPage } from '../user-list/user-list';
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
   
    this.navCtrl.push(UserListPage);
  }

  async goToRegisterPage() {

    this.navCtrl.push(RegisterUserPage);
  }
}
