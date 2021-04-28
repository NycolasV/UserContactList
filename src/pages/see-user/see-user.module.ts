import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeeUserPage } from './see-user';

@NgModule({
  declarations: [
    SeeUserPage,
  ],
  imports: [
    IonicPageModule.forChild(SeeUserPage),
  ],
})
export class SeeUserPageModule {}
