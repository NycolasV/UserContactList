import { Component } from '@angular/core';
import { IonicPage, Loading, LoadingController, NavController, NavParams } from 'ionic-angular';
import { CepModel } from '../../models/cep-model';
import { UserModel } from '../../models/user-model';
import { UserProvider } from '../../providers/user.provider';

@IonicPage()
@Component({
  selector: 'page-add-contact',
  templateUrl: 'add-contact.html',
})
export class AddContactPage {

  loading: Loading;

  cep: string;

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

  async getAddress() {
    if (!this.cep || this.cep.length < 7) {
      return;
    }

    var address: CepModel;

    this.provider.getCep(this.cep)
        .subscribe(response => {
          address = response;
        })

    console.log(address);
  }
}
