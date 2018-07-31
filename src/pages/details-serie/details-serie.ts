import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { SeriesProvider } from '../../providers/series/series';
import { ModalSeasonPage } from '../modal-season/modal-season';
import { TemporadaProvider } from '../../providers/temporada/temporada';
import { Temporada } from '../../model/temporada';
import { Observable } from '../../../node_modules/rxjs';
import { Episodio } from '../../model/episodio';
import { EpisodioProvider } from '../../providers/episodio/episodio';
import { ModalEpisodePage } from '../modal-episode/modal-episode';
import { EditTemporadaPage } from '../edit-temporada/edit-temporada';
import { EditEpisodioPage } from '../edit-episodio/edit-episodio';
import { EditSeriePage } from '../edit-serie/edit-serie';

@IonicPage()
@Component({
  selector: 'page-details-serie',
  templateUrl: 'details-serie.html',
})
export class DetailsSeriePage {

  public serie: any;
  public temporadas: Observable<Temporada[]>;
  public episodios: Observable<Episodio[]>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public provider: SeriesProvider,
    public tProvider: TemporadaProvider,
    public eProvider: EpisodioProvider,
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

    this.episodios = this.eProvider.getAll()
      .snapshotChanges()
      .map(
        changes => {
          return changes.map(c => ({
            key: c.payload.key, ...c.payload.val()
          }))
        });
  }

  goToEditSerie(serie){
    let myModal = this.modalCtrl.create(EditSeriePage, { serie });
    myModal.present();
  }

  goToEditEpisodio(e){
    let myModal = this.modalCtrl.create(EditEpisodioPage, { e });
    /*myModal.onDidDismiss(() => { });*/
    myModal.present();
  }

  goToEditTemporada(t){
    let myModal = this.modalCtrl.create(EditTemporadaPage, { t });
    /*myModal.onDidDismiss(() => { });*/
    myModal.present();
  }

  goToEpisodio(t){
    let myModal = this.modalCtrl.create(ModalEpisodePage, {
      'key': t.key
    });
    /*myModal.onDidDismiss(() => { });*/
    myModal.present();
  }

  goToTemporada(serie){
    let myModal = this.modalCtrl.create(ModalSeasonPage, {
      'key': serie.key
    });
    /*myModal.onDidDismiss(() => { });*/
    myModal.present();
  }

  goToEditTemp(t){
    let myModal = this.modalCtrl.create(EditTemporadaPage, { t });
    /*myModal.onDidDismiss(() => { });*/
    myModal.present();
  }

  goToEditEpis(e){
    let myModal = this.modalCtrl.create(EditEpisodioPage, { e });
    /*myModal.onDidDismiss(() => { });*/
    myModal.present();
  }
  
}