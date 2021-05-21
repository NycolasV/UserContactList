import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeeContactPage } from './see-contact';

@NgModule({
  declarations: [
    SeeContactPage,
  ],
  imports: [
    IonicPageModule.forChild(SeeContactPage),
  ],
})
export class SeeContactPageModule {}
