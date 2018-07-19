import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '../../../node_modules/angularfire2/database';
import { Filme } from '../../model/filme';

@Injectable()
export class FilmesProvider {

  private filmes = this.db.list<Filme>('filmes/');

  constructor(
    private db: AngularFireDatabase
  ) { }

  getAll(){
    return this.filmes;
  }

  addFilme(filme: Filme){
    return this.filmes.push(filme);
  }

  updateFilme(filme: Filme){
    return this.filmes.update(filme.key, filme);
  }

  remove(filme: Filme) {
    return this.filmes.remove(filme.key);
  }

}
