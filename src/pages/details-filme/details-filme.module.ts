import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsFilmePage } from './details-filme';

@NgModule({
  declarations: [
    DetailsFilmePage,
  ],
  imports: [
    IonicPageModule.forChild(DetailsFilmePage),
  ],
})
export class DetailsFilmePageModule {}
