import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Camera, CameraOptions } from '../../../node_modules/@ionic-native/camera';
import { ArtistaProvider } from '../../providers/artista/artista';
import { ArtistasPage } from '../artistas/artistas';

@IonicPage()
@Component({
  selector: 'page-foto-artista',
  templateUrl: 'foto-artista.html',
})
export class FotoArtistaPage {

  myphoto: any;
  loading: any;
  key: any;
  artista: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private camera: Camera,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public artistaService: ArtistaProvider
  ) {
    this.key = this.navParams.get('key');
  }

  addImage(myphoto){
    this.showLoader();
    this.artista = {
      'key': this.key,
      'foto': myphoto
    };
    this.artistaService.updateArtista(this.artista).then(data => {
      this.loading.dismiss();
      this.presentToast('Cartaz salvo com sucesso!');
      this.navCtrl.setRoot(ArtistasPage);
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
