import { Component } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, ViewController } from 'ionic-angular';
import { Artista } from '../../model/artista';
import { ArtistaProvider } from '../../providers/artista/artista';
import { Elenco } from '../../model/elenco';
import { ElencoProvider } from '../../providers/elenco/elenco';

@IonicPage()
@Component({
  selector: 'page-elenco',
  templateUrl: 'elenco.html',
})
export class ElencoPage {

  public artistas: Observable<Artista[]>;
  public producaoKey: any;
  public loading: any;
  public e: Elenco;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public aProvider: ArtistaProvider,
    public eProvider: ElencoProvider,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public viewCtrl: ViewController
  ) {
    this.producaoKey = this.navParams.get('pkey');
    this.artistas = this.aProvider.getAll()
    .snapshotChanges()
    .map(
      changes => {
        return changes.map(c => ({  
          key: c.payload.key, ...c.payload.val()
        }))
      });  
  }

  addElenco(elenco){
    this.showLoader();
    this.e = {
      'producao_key': this.producaoKey,
      'artista_key': elenco.artista_key,
      'atividade': elenco.atividade
    }
    this.eProvider.addElenco(this.e).then( data => {
      this.loading.dismiss();
      this.presentToast('Episódio salvo com sucesso!');
      this.dismiss();
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

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
