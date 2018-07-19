import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, ViewController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '../../../node_modules/@angular/forms';

@IonicPage()
@Component({
  selector: 'page-modal-episode',
  templateUrl: 'modal-episode.html',
})
export class ModalEpisodePage {

  public episodeForm: FormGroup;
  public loading: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public viewCtrl: ViewController
  ) {
    this.episodeForm = this.createEpisodeForm();    
  }

  createEpisodeForm(){
    return this.formBuilder.group({
      episodio: ['', Validators.required],
      titulo: ['', Validators.required],
      data: ['', Validators.required],
      duracao: ['', Validators.required]
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
