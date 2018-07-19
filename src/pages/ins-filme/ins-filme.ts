import { Component, Directive, HostListener, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { FormGroup, FormBuilder, Validators } from '../../../node_modules/@angular/forms';
import { FilmesProvider } from '../../providers/filmes/filmes';
import { Filme } from '../../model/filme';
import { CartazFilmePage } from '../cartaz-filme/cartaz-filme';

@IonicPage()
@Component({
  selector: 'page-ins-filme',
  templateUrl: 'ins-filme.html',
})
@Directive({
  selector: 'ion-textarea[autosize]'
})
export class InsFilmePage {

  @HostListener('document:keydown.enter', ['$event']) 
    onKeydownHandler(evt: KeyboardEvent) {
    this.adjust()
  }
  Text = {} as Text;

  public inserirFilmeForm: FormGroup;
  public paises: any;
  public idiomas: any;
  public distribuidores: any;
  public generos: any;
  public filme: Filme;
  public loading: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public authService: AuthProvider,
    public filmeService: FilmesProvider,
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public element:ElementRef
  ) {
    this.paises = this.authService.getPais();
    this.idiomas = this.authService.getIdiomas();
    this.distribuidores = this.authService.getDistribuidores();
    this.generos = this.authService.getGeneros();

    this.inserirFilmeForm = this.createInserirFilmeForm();
  }

  ngAfterViewInit(){
    this.adjust()
  }

  createInserirFilmeForm(){
    return this.formBuilder.group({
      filme: ['', Validators.required],
      titulo_original: ['', Validators.required],
      lancamento: ['', Validators.required],   
      pais: ['', Validators.required],
      idioma: ['', Validators.required],
      distribuidor: ['', Validators.required],
      genero: ['', Validators.required],
      sinopse: ['', Validators.required],
      duracao: ['', Validators.required]
    })
  }

  addFilme(){ 
    this.showLoader();    
    this.filme = this.inserirFilmeForm.value;
    this.filmeService.addFilme(this.filme).then( data => {
      this.loading.dismiss();
      this.presentToast('Filme salvo com sucesso!');
      this.navCtrl.push(CartazFilmePage, {
        'key': data.key
      });
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

  adjust():void {
    let textArea = 
    this.element.nativeElement.getElementsByTagName('textarea')[0];
    textArea.style.overflow = 'hidden';
    textArea.style.height = 'auto';
    textArea.style.height = (textArea.scrollHeight + 32) + "px";
  }
}
