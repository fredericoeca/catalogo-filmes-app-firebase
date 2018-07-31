import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '../../../node_modules/angularfire2/database';
import { Elenco } from '../../model/elenco';

@Injectable()
export class ElencoProvider {

  public elenco = this.db.list<Elenco>('elenco/');

  constructor(
    public db: AngularFireDatabase
  ) { }

  getAll(){
    return this.elenco;
  }

  addElenco(e: Elenco){
    return this.elenco.push(e);
  }

  updateElenco(e: Elenco){
    return this.elenco.update(e.key, e);
  }

  remove(e: Elenco) {
    return this.elenco.remove(e.key);
  }

}
