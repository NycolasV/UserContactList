import { Component } from '@angular/core';
import { IonicPage, Loading, NavController} from 'ionic-angular';
import { UserProvider } from '../../providers/user.provider';
import { ContactListPage } from '../contact-list/contact-list';
import { RegisterUserPage } from '../register-user/register-user';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loading: Loading;
  username: string;
  password: string;

  constructor(private navCtrl: NavController, private provider: UserProvider) {
  }

  async goToLoginPage() {
   
    if (!this.username || !this.password) {
      console.log('Parametros vazios');
      return;
    }

    var canWatch = await this.provider.loginUser(this.username, this.password);

    if (canWatch) {
      console.log('aqui')
      this.navCtrl.push(ContactListPage);
    } 
    else {
      console.log('Login incorreto');
      return;
    }
  }

  async goToRegisterPage() {

    this.navCtrl.push(RegisterUserPage);
  }
}
