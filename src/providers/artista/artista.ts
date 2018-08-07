import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '../../../node_modules/angularfire2/database';
import { Artista } from '../../model/artista';

@Injectable()
export class ArtistaProvider {
  
  public artistas = this.db.list<Artista>('artistas/');

  constructor(
    private db: AngularFireDatabase
  ) { }

  getAll(){
    return this.artistas;
  }

  addArtista(artista: Artista){ 
    return this.artistas.push(artista);
  }

  updateArtista(artista: Artista){
    return this.artistas.update(artista.key, artista);
  }

  remove(artista: Artista) {
    return this.artistas.remove(artista.key);
  }

}
