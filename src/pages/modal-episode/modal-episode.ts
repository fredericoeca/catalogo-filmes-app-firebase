import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, ViewController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '../../../node_modules/@angular/forms';
import { EpisodioProvider } from '../../providers/episodio/episodio';

@IonicPage()
@Component({
  selector: 'page-modal-episode',
  templateUrl: 'modal-episode.html',
})
export class ModalEpisodePage {

  public episodeForm: FormGroup;
  public loading: any;
  public tKey: any;
  public episodio: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public viewCtrl: ViewController,
    public eProvider: EpisodioProvider
  ) {
    this.episodeForm = this.createEpisodeForm(); 
    this.tKey = this.navParams.get('key');
  }

  createEpisodeForm(){
    return this.formBuilder.group({
      episodio: ['', Validators.required],
      titulo: ['', Validators.required],
      duracao: ['', Validators.required]
    })
  }

  addEpisode(){
    this.showLoader();
    let { episodio, titulo, duracao } = this.episodeForm.value;
    this.episodio = {
      'temporada_key': this.tKey,
      'episodio': episodio,
      'titulo': titulo,
      'duracao': duracao
    }
    this.eProvider.addEpisodio(this.episodio).then(data => {
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