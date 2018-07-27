import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FilmesProvider } from '../../providers/filmes/filmes';
import { EditFilmePage } from '../edit-filme/edit-filme';

@IonicPage()
@Component({
  selector: 'page-details-filme',
  templateUrl: 'details-filme.html',
})
export class DetailsFilmePage {

  public filme: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public provider: FilmesProvider
  ) {
    this.filme = this.navParams.get('f');
  }

  goToEditar(filme){
    this.navCtrl.push(EditFilmePage, { filme });
  }

}