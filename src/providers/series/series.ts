import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '../../../node_modules/angularfire2/database';
import { Serie } from '../../model/serie';

@Injectable()
export class SeriesProvider {

  private series = this.db.list<Serie>('series/');

  constructor(
    public db: AngularFireDatabase
  ) { }

  getAll(){
    return this.series;
  }

  addSerie(serie: Serie){
    return this.series.push(serie);
  }

  updateSerie(serie: Serie){
    return this.series.update(serie.key, serie);
  }

  remove(serie: Serie) {
    return this.series.remove(serie.key);
  }

}
