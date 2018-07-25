import { Component, ElementRef, HostListener, Directive } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '../../../node_modules/@angular/forms';
import { Serie } from '../../model/serie';
import { AuthProvider } from '../../providers/auth/auth';
import { SeriesProvider } from '../../providers/series/series';
import { CartazSeriePage } from '../cartaz-serie/cartaz-serie';

@IonicPage()
@Component({
  selector: 'page-ins-serie',
  templateUrl: 'ins-serie.html',
})
@Directive({
  selector: 'ion-textarea[autosize]'
})
export class InsSeriePage {

  @HostListener('document:keydown.enter', ['$event']) 
    onKeydownHandler(evt: KeyboardEvent) {
    this.adjust()
  }
  Text = {} as Text;

  public inserirSerieForm: FormGroup;
  public paises: any;
  public idiomas: any;
  public distribuidores: any;
  public generos: any;
  public serie: Serie;
  public loading: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public authService: AuthProvider,
    public serieService: SeriesProvider,
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public element:ElementRef
  ) {
    this.paises = this.authService.getPais();
    this.idiomas = this.authService.getIdiomas();
    this.distribuidores = this.authService.getDistribuidores();
    this.generos = this.authService.getGeneros();

    this.inserirSerieForm = this.createInserirSerieForm();
  }

  ngAfterViewInit(){
    this.adjust()
  }

  createInserirSerieForm(){
    return this.formBuilder.group({
      serie: ['', Validators.required],
      titulo_original: ['', Validators.required],
      pais: ['', Validators.required],
      idioma: ['', Validators.required],
      distribuidor: ['', Validators.required],
      genero: ['', Validators.required],
      sinopse: ['', Validators.required]
    })
  }

  addSerie(){ 
    this.showLoader();    
    this.serie = this.inserirSerieForm.value;
    this.serieService.addSerie(this.serie).then( data => {
      this.loading.dismiss();
      this.presentToast('Série salva com sucesso!');
      this.navCtrl.push(CartazSeriePage);
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
