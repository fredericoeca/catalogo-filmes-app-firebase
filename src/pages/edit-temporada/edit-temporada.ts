import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, ViewController } from 'ionic-angular';
import { Temporada } from '../../model/temporada';
import { TemporadaProvider } from '../../providers/temporada/temporada';

@IonicPage()
@Component({
  selector: 'page-edit-temporada',
  templateUrl: 'edit-temporada.html',
})
export class EditTemporadaPage {

  public temporada: Temporada;
  public t: Temporada;
  public loading: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public tProvider: TemporadaProvider,
    public viewCtrl: ViewController
  ) {
    this.temporada = this.navParams.get('t');
  }
  
  editTemporada(temporada){
    this.showLoader();
    this.t = {
      'key': this.temporada.key,
      'serie_key': this.temporada.serie_key,
      'temporada': temporada.temporada,
      'lancamento': temporada.lancamento
    };
    console.log(this.t);
    this.tProvider.updateTemporada(this.t).then(data => {
      this.loading.dismiss();
      this.presentToast('Temporada editada com sucesso!');
      this.dismiss();
    });
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
