import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, ViewController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '../../../node_modules/@angular/forms';
import { TemporadaProvider } from '../../providers/temporada/temporada';

@IonicPage()
@Component({
  selector: 'page-modal-season',
  templateUrl: 'modal-season.html',
})
export class ModalSeasonPage {

  public seasonForm: FormGroup;
  public loading: any;
  public key: any;
  public season: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public viewCtrl: ViewController,
    public provider: TemporadaProvider
  ) {
    this.seasonForm = this.createSeasonForm(); 
    this.key = this.navParams.get('key');
  }

  createSeasonForm(){
    return this.formBuilder.group({
      temporada: ['', Validators.required],
      lancamento: ['', Validators.required]
    })
  }

  addSeason(){
    this.showLoader();
    let { temporada, lancamento } = this.seasonForm.value;
    this.season = {
      'serie_key': this.key,
      'temporada': temporada,
      'lancamento': lancamento      
    }
    this.provider.addTemporada(this.season).then(data => {
      this.loading.dismiss();
      this.presentToast('Temporada salva com sucesso!');
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
