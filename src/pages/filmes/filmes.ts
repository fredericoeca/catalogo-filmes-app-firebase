import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from '../../../node_modules/rxjs';
import { Filme } from '../../model/filme';
import 'rxjs/Rx';
import { FilmesProvider } from '../../providers/filmes/filmes';
import { DetailsFilmePage } from '../details-filme/details-filme';
import { InsFilmePage } from '../ins-filme/ins-filme';

@IonicPage()
@Component({
  selector: 'page-filmes',
  templateUrl: 'filmes.html',
})
export class FilmesPage {

  public filmes: Observable<Filme[]>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private provider: FilmesProvider
  ) {
    this.filmes = this.provider.getAll()
      .snapshotChanges()
      .map(
        changes => {
          return changes.map(c => ({  
            key: c.payload.key, ...c.payload.val()
          }))
        });   
  }

  goToDetails(f){
    this.navCtrl.push(DetailsFilmePage, {f})
  }

  goToInsertFilme(){
    this.navCtrl.push(InsFilmePage);
  }

}
