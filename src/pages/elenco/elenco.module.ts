import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ElencoPage } from './elenco';

@NgModule({
  declarations: [
    ElencoPage,
  ],
  imports: [
    IonicPageModule.forChild(ElencoPage),
  ],
})
export class ElencoPageModule {}
