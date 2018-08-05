import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController, LoadingController, ToastController } from 'ionic-angular';
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
  public loading: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public provider: FilmesProvider,
    public modalCtrl: ModalController,
    public aProvider: ArtistaProvider,
    public eProvider: ElencoProvider,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController
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
    this.eProvider.remove(e).then( data => {
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