import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalEpisodePage } from './modal-episode';

@NgModule({
  declarations: [
    ModalEpisodePage,
  ],
  imports: [
    IonicPageModule.forChild(ModalEpisodePage),
  ],
})
export class ModalEpisodePageModule {}
