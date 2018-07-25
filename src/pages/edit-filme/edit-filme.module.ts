import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditFilmePage } from './edit-filme';

@NgModule({
  declarations: [
    EditFilmePage,
  ],
  imports: [
    IonicPageModule.forChild(EditFilmePage),
  ],
})
export class EditFilmePageModule {}
