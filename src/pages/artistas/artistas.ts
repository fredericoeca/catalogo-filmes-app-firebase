import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from '../../../node_modules/rxjs';
import { Artista } from '../../model/artista';
import { ArtistaProvider } from '../../providers/artista/artista';
import { InsArtistaPage } from '../ins-artista/ins-artista';
import { EditArtistaPage } from '../edit-artista/edit-artista';

@IonicPage()
@Component({
  selector: 'page-artistas',
  templateUrl: 'artistas.html',
})
export class ArtistasPage {

  public artistas: Observable<Artista[]>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public provider: ArtistaProvider
  ) {
    this.artistas = this.provider.getAll()
    .snapshotChanges()
    .map(
      changes => {
        return changes.map(c => ({  
          key: c.payload.key, ...c.payload.val()
        }))
      });    
  }

  goToEdit(a){
    this.navCtrl.push(EditArtistaPage, { a })
  }

  goToInsertArtista(){
    this.navCtrl.push(InsArtistaPage);
  }
}
