import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, ViewController } from 'ionic-angular';
import { Filme } from '../../model/filme';
import { AuthProvider } from '../../providers/auth/auth';
import { FilmesProvider } from '../../providers/filmes/filmes';
import { CartazFilmePage } from '../cartaz-filme/cartaz-filme';
import { FilmesPage } from '../filmes/filmes';

@IonicPage()
@Component({
  selector: 'page-edit-filme',
  templateUrl: 'edit-filme.html',
})
export class EditFilmePage {

  public filme: Filme;
  public sKey: any;
  public f: Filme;
  public loading: any;
  public paises: any;
  public idiomas: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public fProvider: FilmesProvider,
    public authService: AuthProvider,
    public viewCtrl: ViewController
  ) {
    this.filme = this.navParams.get('filme');
    this.paises = this.authService.getPais();
    this.idiomas = this.authService.getIdiomas();
  }

  editFilme(filme){
    this.showLoader();
    this.f = {
      'key': this.filme.key,
      'filme': filme.filme,
      'titulo_original': filme.titulo_original,
      'lancamento': filme.lancamento,
      'pais': (filme.pais === '')? this.filme.pais : filme.pais,
      'idioma': (filme.idioma === '')? this.filme.idioma : filme.idioma,
      'distribuidor': filme.distribuidor,
      'genero': filme.genero,
      'sinopse': filme.sinopse,
      'duracao': filme.duracao,
      'cartaz': this.filme.cartaz
    };
    this.fProvider.updateFilme(this.f).then(data => {
      this.loading.dismiss();
      this.presentToast('Filme editada com sucesso!');
      this.navCtrl.setRoot(FilmesPage);
    });
  }

  goToCartaz(){
    this.navCtrl.push(CartazFilmePage, {
      'key': this.filme.key
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
