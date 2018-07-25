import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { SeriesProvider } from '../../providers/series/series';
import { ModalSeasonPage } from '../modal-season/modal-season';
import { TemporadaProvider } from '../../providers/temporada/temporada';
import { Temporada } from '../../model/temporada';
import { Observable } from '../../../node_modules/rxjs';

@IonicPage()
@Component({
  selector: 'page-details-serie',
  templateUrl: 'details-serie.html',
})
export class DetailsSeriePage {

  public serie: any;
  public temporadas: Observable<Temporada[]>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public provider: SeriesProvider,
    public tProvider: TemporadaProvider,
    public modalCtrl: ModalController
  ) {
    this.serie = this.navParams.get('s'); 

    this.temporadas = this.tProvider.getAll()
      .snapshotChanges()
      .map(
        changes => {
          return changes.map(c => ({  
            key: c.payload.key, ...c.payload.val()
          }))
        });
  }

  goToTemporada(serie){
    let myModal = this.modalCtrl.create(ModalSeasonPage, {
      'key': serie.key
    });
    /*myModal.onDidDismiss(() => { });*/
    myModal.present();
  }
  
}