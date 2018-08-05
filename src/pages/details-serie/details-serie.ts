import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController, LoadingController, ToastController } from 'ionic-angular';
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
import { ElencoPage } from '../elenco/elenco';
import { ArtistaProvider } from '../../providers/artista/artista';
import { Elenco } from '../../model/elenco';
import { Artista } from '../../model/artista';
import { ElencoProvider } from '../../providers/elenco/elenco';

@IonicPage()
@Component({
  selector: 'page-details-serie',
  templateUrl: 'details-serie.html',
})
export class DetailsSeriePage {

  public serie: any;
  public temporadas: Observable<Temporada[]>;
  public episodios: Observable<Episodio[]>;
  public artistas: Observable<Artista[]>;
  public elenco: Observable<Elenco[]>;
  public loading: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public provider: SeriesProvider,
    public tProvider: TemporadaProvider,
    public eProvider: EpisodioProvider,
    public aProvider: ArtistaProvider,
    public elProvider: ElencoProvider,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController
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
    this.artistas = this.aProvider.getAll()
    .snapshotChanges()
    .map(
      changes => {
        return changes.map(c => ({  
          key: c.payload.key, ...c.payload.val()
        }))
      });
    this.elenco = this.elProvider.getAll()
    .snapshotChanges()
    .map(
      changes => {
        return changes.map(c => ({  
          key: c.payload.key, ...c.payload.val()
        }))
      });
  }

  goToElenco(serie){
    let myModal = this.modalCtrl.create(ElencoPage, { 
      'pkey': serie.key
     });
    /*myModal.onDidDismiss(() => { });*/
    myModal.present();
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

  showConfirm(e) {
    const confirm = this.alertCtrl.create({
      message: 'Tem certeza que deseja apagar artista do elenco?',
      buttons: [
        {
          text: 'Não',
          handler: () => {            
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Sim',
          handler: () => {
            this.removeElenco(e);
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  removeElenco(e){
    this.showLoader();
    this.elProvider.remove(e).then( data => {
      this.loading.dismiss();
      this.presentToast('Removido com sucesso!');
    })
  }

  showLoader(){
    this.loading = this.loadingCtrl.create({
        content: 'carregando...'
    });

    this.loading.present();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
  
}