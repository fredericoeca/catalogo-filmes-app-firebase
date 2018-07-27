import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { ArtistaProvider } from '../../providers/artista/artista';
import { ArtistasPage } from '../artistas/artistas';
import { FotoArtistaPage } from '../foto-artista/foto-artista';
import { Artista } from '../../model/artista';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-edit-artista',
  templateUrl: 'edit-artista.html',
})
export class EditArtistaPage {

  public artista: Artista;
  public loading: any;
  public a: Artista;
  public paises: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public artistaService: ArtistaProvider,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public auth: AuthProvider
  ) {
    this.artista = this.navParams.get('a'); 
    this.paises = this.auth.getPais();
  }

  editArtista(artista){
    this.showLoader();
    this.a = {
      'key': this.artista.key,
      'nome': artista.nome,
      'atividade': artista.atividade,
      'pais': (artista.pais === '')? this.artista.pais : artista.pais,
      'nascimento': (artista.nascimento === "")? this.artista.nascimento : artista.nascimento,
      'foto': this.artista.foto
    };
    this.artistaService.updateArtista(this.a).then(data => {
      this.loading.dismiss();
      this.presentToast('Cartaz salvo com sucesso!');
      this.navCtrl.setRoot(ArtistasPage);
    });
  }

  goToFoto(){
    this.navCtrl.push(FotoArtistaPage, {
      'key': this.artista.key
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
