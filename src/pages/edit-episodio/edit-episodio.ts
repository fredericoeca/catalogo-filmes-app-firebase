import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, ViewController } from 'ionic-angular';
import { Episodio } from '../../model/episodio';
import { EpisodioProvider } from '../../providers/episodio/episodio';

@IonicPage()
@Component({
  selector: 'page-edit-episodio',
  templateUrl: 'edit-episodio.html',
})
export class EditEpisodioPage {

  public episodio: Episodio;
  public e: Episodio;
  public loading: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public eProvider: EpisodioProvider,
    public viewCtrl: ViewController
  ) {
    this.episodio = this.navParams.get('e');
  }

  editEpisodio(episodio){
    this.showLoader();
    this.e = {
      'key': this.episodio.key,
      'temporada_key': this.episodio.temporada_key,
      'episodio': episodio.episodio,
      'titulo': episodio.titulo,
      'data': episodio.data,
      'duracao': episodio.duracao
    };
    console.log(this.e);
    this.eProvider.updateEpisodio(this.e).then(data => {
      this.loading.dismiss();
      this.presentToast('Episódio editada com sucesso!');
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
