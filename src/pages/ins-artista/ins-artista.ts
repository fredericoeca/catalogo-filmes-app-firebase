import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '../../../node_modules/@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { Artista } from '../../model/artista';
import { ArtistaProvider } from '../../providers/artista/artista';
import { FotoArtistaPage } from '../foto-artista/foto-artista';

@IonicPage()
@Component({
  selector: 'page-ins-artista',
  templateUrl: 'ins-artista.html',
})
export class InsArtistaPage {

  public inserirArtistaForm: FormGroup;
  public paises: any;
  public loading: any;
  public artista: Artista;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthProvider,
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public artistaService: ArtistaProvider
  ) {
    this.paises = this.authService.getPais();
    this.inserirArtistaForm = this.createInserirArtistaForm();
  }

  createInserirArtistaForm(){
    return this.formBuilder.group({
      nome: ['', Validators.required],
      atividade: ['', Validators.required],
      pais: ['', Validators.required],
      nascimento: ['', Validators.required]
    })
  }

  addArtista(){
    this.showLoader();
    this.artista = this.inserirArtistaForm.value;
    this.artistaService.addArtista(this.artista).then(data => {
      this.loading.dismiss();
      this.presentToast('Artista salvo com sucesso!');
      this.navCtrl.push(FotoArtistaPage, {
        'key': data.key
      });
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
