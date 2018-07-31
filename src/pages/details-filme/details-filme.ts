import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FilmesProvider } from '../../providers/filmes/filmes';
import { EditFilmePage } from '../edit-filme/edit-filme';
import { ElencoPage } from '../elenco/elenco';

@IonicPage()
@Component({
  selector: 'page-details-filme',
  templateUrl: 'details-filme.html',
})
export class DetailsFilmePage {

  public filme: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public provider: FilmesProvider,
    public modalCtrl: ModalController
  ) {
    this.filme = this.navParams.get('f');
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