import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Camera, CameraOptions } from '../../../node_modules/@ionic-native/camera';
import { FilmesProvider } from '../../providers/filmes/filmes';
import { FilmesPage } from '../filmes/filmes';

@IonicPage()
@Component({
  selector: 'page-cartaz-filme',
  templateUrl: 'cartaz-filme.html',
})
export class CartazFilmePage {
  
  myphoto: any;
  loading: any;
  key: any;
  filme: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private camera: Camera,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public filmesService: FilmesProvider
  ) {
    this.key = this.navParams.get('key');
  }

  addImage(myphoto){
    this.showLoader();
    this.filme = {
      'key': this.key,
      'cartaz': myphoto
    };
    this.filmesService.updateFilme(this.filme).then(data => {
      this.loading.dismiss();
      this.presentToast('Cartaz salvo com sucesso!');
      this.navCtrl.setRoot(FilmesPage);
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
