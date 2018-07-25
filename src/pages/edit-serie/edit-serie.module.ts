import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditSeriePage } from './edit-serie';

@NgModule({
  declarations: [
    EditSeriePage,
  ],
  imports: [
    IonicPageModule.forChild(EditSeriePage),
  ],
})
export class EditSeriePageModule {}
