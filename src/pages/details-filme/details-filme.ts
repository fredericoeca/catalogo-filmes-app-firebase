import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FilmesProvider } from '../../providers/filmes/filmes';
import { EditFilmePage } from '../edit-filme/edit-filme';
import { ElencoPage } from '../elenco/elenco';
import { Observable } from '../../../node_modules/rxjs';
import { Artista } from '../../model/artista';
import { ArtistaProvider } from '../../providers/artista/artista';
import { ElencoProvider } from '../../providers/elenco/elenco';
import { Elenco } from '../../model/elenco';

@IonicPage()
@Component({
  selector: 'page-details-filme',
  templateUrl: 'details-filme.html',
})
export class DetailsFilmePage {

  public filme: any;
  public artistas: Observable<Artista[]>;
  public elenco: Observable<Elenco[]>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public provider: FilmesProvider,
    public modalCtrl: ModalController,
    public aProvider: ArtistaProvider,
    public eProvider: ElencoProvider
  ) {
    this.filme = this.navParams.get('f');
    this.artistas = this.aProvider.getAll()
    .snapshotChanges()
    .map(
      changes => {
        return changes.map(c => ({  
          key: c.payload.key, ...c.payload.val()
        }))
      });
    this.elenco = this.eProvider.getAll()
    .snapshotChanges()
    .map(
      changes => {
        return changes.map(c => ({  
          key: c.payload.key, ...c.payload.val()
        }))
      });
  }

  goToEditar(filme){
    let myModal = this.modalCtrl.create(EditFilmePage, { filme });
    myModal.present();
  }

  goToElenco(filme){
    let myModal = this.modalCtrl.create(ElencoPage, { 
      'pkey': filme.key
     });
    /*myModal.onDidDismiss(() => { });*/
    myModal.present();
  }

}