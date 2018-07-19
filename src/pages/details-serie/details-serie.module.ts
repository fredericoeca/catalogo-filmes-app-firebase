import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsSeriePage } from './details-serie';

@NgModule({
  declarations: [
    DetailsSeriePage,
  ],
  imports: [
    IonicPageModule.forChild(DetailsSeriePage),
  ],
})
export class DetailsSeriePageModule {}
