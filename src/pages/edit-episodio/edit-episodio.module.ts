import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditEpisodioPage } from './edit-episodio';

@NgModule({
  declarations: [
    EditEpisodioPage,
  ],
  imports: [
    IonicPageModule.forChild(EditEpisodioPage),
  ],
})
export class EditEpisodioPageModule {}
