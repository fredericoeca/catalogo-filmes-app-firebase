import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { SeriesProvider } from '../../providers/series/series';
import { ModalSeasonPage } from '../modal-season/modal-season';

@IonicPage()
@Component({
  selector: 'page-details-serie',
  templateUrl: 'details-serie.html',
})
export class DetailsSeriePage {

  public serie: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public provider: SeriesProvider,
    public modalCtrl: ModalController
  ) {
    this.serie = this.navParams.get('s');    
  }

  goToTemporada(serie){
    let myModal = this.modalCtrl.create(ModalSeasonPage, {
      'key': serie.key
    });
    /*myModal.onDidDismiss(() => {        
        
    });*/
    myModal.present();
  }
  
}
