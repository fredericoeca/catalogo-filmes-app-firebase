import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CartazFilmePage } from './cartaz-filme';

@NgModule({
  declarations: [
    CartazFilmePage,
  ],
  imports: [
    IonicPageModule.forChild(CartazFilmePage),
  ],
})
export class CartazFilmePageModule {}
