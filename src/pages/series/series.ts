import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from '../../../node_modules/rxjs';
import { Serie } from '../../model/serie';
import { SeriesProvider } from '../../providers/series/series';
import { InsSeriePage } from '../ins-serie/ins-serie';
import { DetailsSeriePage } from '../details-serie/details-serie';

@IonicPage()
@Component({
  selector: 'page-series',
  templateUrl: 'series.html',
})
export class SeriesPage {

  public series: Observable<Serie[]>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public provider: SeriesProvider
  ) {
    this.series = this.provider.getAll()
    .snapshotChanges()
    .map(
      changes => {
        return changes.map(c => ({  
          key: c.payload.key, ...c.payload.val()
        }))
      });    
  }

  goToDetails(s){
    this.navCtrl.push(DetailsSeriePage, {s});
  }

  goToInsertSerie(){
    this.navCtrl.push(InsSeriePage);
  }
 
}
