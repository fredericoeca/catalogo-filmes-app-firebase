import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Serie } from '../../model/serie';
import { SeriesProvider } from '../../providers/series/series';
import { CartazSeriePage } from '../cartaz-serie/cartaz-serie';
import { AuthProvider } from '../../providers/auth/auth';
import { SeriesPage } from '../series/series';

@IonicPage()
@Component({
  selector: 'page-edit-serie',
  templateUrl: 'edit-serie.html',
})
export class EditSeriePage {

  public serie: Serie;
  public sKey: any;
  public s: Serie;
  public loading: any;
  public paises: any;
  public idiomas: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public sProvider: SeriesProvider,
    public authService: AuthProvider
  ) {
    this.serie = this.navParams.get('serie');
    this.paises = this.authService.getPais();
    this.idiomas = this.authService.getIdiomas();
  }

  editSerie(serie){
    this.showLoader();
    this.s = {
      'key': this.serie.key,
      'serie': serie.serie,
      'titulo_original': serie.titulo_original,
      'pais': (serie.pais === '')? this.serie.pais : serie.pais,
      'idioma': (serie.idioma === '')? this.serie.idioma : serie.idioma,
      'distribuidor': serie.distribuidor,
      'genero': serie.genero,
      'sinopse': serie.sinopse,
      'cartaz': this.serie.cartaz
    };
    console.log(this.s);
    this.sProvider.updateSerie(this.s).then(data => {
      this.loading.dismiss();
      this.presentToast('Série editada com sucesso!');
      this.navCtrl.setRoot(SeriesPage);
    });
  }

  goToCartaz(){
    this.navCtrl.push(CartazSeriePage, {
      'key': this.serie.key
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
