import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditArtistaPage } from './edit-artista';

@NgModule({
  declarations: [
    EditArtistaPage,
  ],
  imports: [
    IonicPageModule.forChild(EditArtistaPage),
  ],
})
export class EditArtistaPageModule {}
