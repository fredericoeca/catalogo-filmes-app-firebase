import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '../../../node_modules/angularfire2/database';
import { Episodio } from '../../model/episodio';

@Injectable()
export class EpisodioProvider {

  public episodios = this.db.list<Episodio>('episodios/');

  constructor(
    public db: AngularFireDatabase
  ) { }

  getAll(){
    return this.episodios;
  }

  addEpisodio(episodio: Episodio){
    return this.episodios.push(episodio);
  }

  updateEpisodio(episodio: Episodio){
    return this.episodios.update(episodio.key, episodio);
  }

  remove(episodio: Episodio) {
    return this.episodios.remove(episodio.key);
  }
}
