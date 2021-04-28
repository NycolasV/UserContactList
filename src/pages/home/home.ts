import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage
{

  constructor(public navCtrl: NavController)
  {
    var user = localStorage.getItem('userId');

    if (user != null) {
      //this.navCtrl.push(RoutingPage);
    }
  }

  goToRegisterPage()
  {
    // this.navCtrl.push(Register_1Page);
  }

  goToLoginPage()
  {
    // this.navCtrl.push(LoginPage);
  }
}
