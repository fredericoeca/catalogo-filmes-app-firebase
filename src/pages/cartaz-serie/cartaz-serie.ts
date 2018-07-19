import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Camera, CameraOptions } from '../../../node_modules/@ionic-native/camera';
import { SeriesProvider } from '../../providers/series/series';
import { DetailsSeriePage } from '../details-serie/details-serie';

@IonicPage()
@Component({
  selector: 'page-cartaz-serie',
  templateUrl: 'cartaz-serie.html',
})
export class CartazSeriePage {

  myphoto: any;
  loading: any;
  key: any;
  serie: any;
  keySeason: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private camera: Camera,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public serieService: SeriesProvider
  ) {
    this.key = this.navParams.get('key');
    this.keySeason = this.navParams.get('key_season');
  }

  addImage(myphoto){
    this.showLoader();
    this.serie = {
      'key': this.key,
      'temporadas.key': this.keySeason,
      'cartaz': myphoto
    };
    this.serieService.updateSerie(this.serie).then(data => {
      this.loading.dismiss();
      this.presentToast('Cartaz salvo com sucesso!');
      this.navCtrl.push(DetailsSeriePage, {
        'key': this.key
      });
    });
  }

  getImage() {
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum:false
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.myphoto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
        this.presentToast(err);
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

}
