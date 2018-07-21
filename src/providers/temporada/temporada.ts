import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '../../../node_modules/angularfire2/database';
import { Temporada } from '../../model/temporada';

@Injectable()
export class TemporadaProvider {

  public temporadas = this.db.list<Temporada>('temporadas/');

  constructor(
    public db: AngularFireDatabase
  ) { }

  getAll(){
    return this.temporadas;
  }

  addTemporada(temporada: Temporada){
    return this.temporadas.push(temporada);
  }

  updateTemporada(temporada: Temporada){
    return this.temporadas.update(temporada.key, temporada);
  }

  remove(temporada: Temporada) {
    return this.temporadas.remove(temporada.key);
  }

}
