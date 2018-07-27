import { Injectable } from '@angular/core';

@Injectable()
export class AuthProvider {

  constructor() {
  }

  orderByPais(a, b){
    if (a.pais < b.pais)
     return -1;
    if (a.pais > b.pais)
      return 1;
    return 0;
  }

  getPais(){

    let paises = [  
      { id: 1, pais: 'Argentina', sigla:	'ARG'},
      { id: 2, pais: 'Austrália', sigla:	'AUS'},
      { id: 3, pais: 'Austria', sigla:	'AUT'},
      { id: 4, pais: 'Bélgica', sigla:	'BEL'},
      { id: 5, pais: 'Brasil', sigla:	'BRA'},
      { id: 6, pais: 'Canadá', sigla:	'CAN'},
      { id: 7, pais: 'Chile', sigla:	'CHI'},
      { id: 8, pais: 'China', sigla:	'CHN'},
      { id: 9, pais: 'Colômbia', sigla:	'COL'},
      { id: 10, pais: 'Croácia', sigla:	'CRO'},
      { id: 11, pais: 'Cuba', sigla:	'CUB'},
      { id: 12, pais: 'Dinamarca', sigla:	'DEN'},
      { id: 13, pais: 'Egito', sigla:	'EGY'},
      { id: 14, pais: 'Espanha', sigla:	'ESP'},
      { id: 15, pais: 'Finlândia', sigla:	'FIN'},
      { id: 16, pais: 'França', sigla:	'FRA'},
      { id: 17, pais: 'Inglaterra', sigla:	'GBR'},
      { id: 18, pais: 'Alemanha', sigla:	'GER'},
      { id: 19, pais: 'Grécia', sigla:	'GRE'},
      { id: 20, pais: 'Hong Kong', sigla:	'HKG'},
      { id: 21, pais: 'India', sigla:	'IND'},
      { id: 22, pais: 'Irã', sigla:	'IRI'},
      { id: 23, pais: 'Irlanda', sigla:	'IRL'},
      { id: 24, pais: 'Itália', sigla:	'ITA'},
      { id: 25, pais: 'Japão', sigla:	'JPN'},
      { id: 26, pais: 'Coréia do Sul', sigla:	'KOR'},
      { id: 27, pais: 'México', sigla:	'MEX'},
      { id: 28, pais: 'Holanda', sigla:	'NED'},
      { id: 29, pais: 'Nova Zelândia', sigla:	'NZL'},
      { id: 30, pais: 'Portugal', sigla:	'POR'},
      { id: 31, pais: 'Africa do Sul', sigla:	'RSA'},
      { id: 32, pais: 'Rússia', sigla:	'RUS'},
      { id: 33, pais: 'Suécia', sigla:	'SWE'},
      { id: 34, pais: 'Suíça', sigla:	'SWI'},
      { id: 35, pais: 'Emirados Árabes Unidos', sigla:	'UAE'},
      { id: 36, pais: 'Ucrânia', sigla:	'UKR'},
      { id: 37, pais: 'Uruguai', sigla:	'URU'},
      { id: 38, pais: 'Estados Unidos', sigla:	'USA'},
      { id: 39, pais: 'Israel', sigla:	'ISR'}
    ];

    paises.sort(this.orderByPais);

    return paises;
  }

  orderByIdi(a, b){
    if (a.idioma < b.idioma)
     return -1;
    if (a.idioma > b.idioma)
      return 1;
    return 0;
  }

  getIdiomas(){

    let idiomas = [
      { id: 1, pais: 1,	idioma: 'Espanhol', sigla: 'es-ar'},
      { id: 2, pais: 2,	idioma: 'Inglês', sigla:	'en-au'},
      { id: 3, pais: 3, idioma:	'Alemão', sigla: 'de-at'},
      { id: 4, pais: 4, idioma: 'Francês', sigla:	'fr-be'},
      { id: 5, pais: 4, idioma:	'Holandês',	sigla: 'nl-be'},
      { id: 6, pais: 5,	idioma: 'Português', sigla: 'pt-br'},
      { id: 7, pais: 6,	idioma: 'Inglês', sigla: 'en-ca'},
      { id: 8, pais: 6,	idioma: 'Francês', sigla: 'fr-ca'},
      { id: 9, pais: 7,	idioma: 'Espanhol', sigla: 'es-cl'},
      { id: 10, pais: 8,	idioma: 'Chinês', sigla: 'zh-cn'},
      { id: 11, pais: 9,	idioma: 'Espanhol', sigla: 'es-co'},
      { id: 12, pais: 10,	idioma: 'Croata', sigla: 'hr'},
      { id: 13, pais: 12,	idioma: 'Dinamarquês', sigla: 'da'},
      { id: 14, pais: 13,	idioma: 'Arabe', sigla: 'ar-eg'},
      { id: 15, pais: 14,	idioma: 'Espanhol', sigla: 'es'},
      { id: 16, pais: 15,	idioma: 'Finlandesa', sigla: 'fi'},
      { id: 17, pais: 16,	idioma: 'Francês', sigla: 'fr'},
      { id: 18, pais: 17,	idioma: 'Inglês', sigla: 'en'},
      { id: 19, pais: 17,	idioma: 'Inglês', sigla: 'en-gb'},
      { id: 20, pais: 18,	idioma: 'Alemão', sigla: 'de'},
      { id: 21, pais: 19,	idioma: 'Grego', sigla: 'el'},
      { id: 22, pais: 20,	idioma: 'Chinês', sigla: 'hk'},
      { id: 23, pais: 21,	idioma: 'Hindi', sigla: 'oi'},
      { id: 24, pais: 22,	idioma: 'Persa', sigla: 'fa'},
      { id: 25, pais: 23,	idioma: 'Inglês', sigla: 'en-ie'},
      { id: 26, pais: 23,	idioma: 'Irlandês', sigla: 'ga'},
      { id: 27, pais: 24,	idioma: 'Italiano', sigla: 'it'},
      { id: 28, pais: 25,	idioma: 'Japonês', sigla: 'ja'},
      { id: 29, pais: 26,	idioma: 'Coreano', sigla: 'ko'},
      { id: 30, pais: 27,	idioma: 'Espanhol', sigla: 'es-mx'},
      { id: 31, pais: 28,	idioma: 'Holandês', sigla: 'nl'},
      { id: 32, pais: 29,	idioma: 'Inglês', sigla: 'en-nz'},
      { id: 33, pais: 30,	idioma: 'Português', sigla: 'pt'},
      { id: 34, pais: 31,	idioma: 'Inglês', sigla: 'en-za'},
      { id: 35, pais: 32,	idioma: 'Russo', sigla: 'ru'},
      { id: 36, pais: 33,	idioma: 'Sueco', sigla: 'sv'},
      { id: 37, pais: 34,	idioma: 'Alemão', sigla: 'de-ch'},
      { id: 38, pais: 34,	idioma: 'Francês', sigla: 'fr-ch'},
      { id: 39, pais: 34,	idioma: 'Italiano', sigla: 'it-ch'},
      { id: 40, pais: 35,	idioma: 'Arabe', sigla: 'ar-ae'},
      { id: 41, pais: 36,	idioma: 'Ucraniano', sigla: 'uk'},
      { id: 42, pais: 37,	idioma: 'Espanhol', sigla: 'es-uy'},
      { id: 43, pais: 38,	idioma: 'Inglês', sigla: 'en-us'}
    ];

    idiomas.sort(this.orderByIdi);

    return idiomas;
  }

  orderByDist(a, b){
    if (a.distribuidor < b.distribuidor)
     return -1;
    if (a.distribuidor > b.distribuidor)
      return 1;
    return 0;
  }

  getDistribuidores(){

    let distribuidores = [
      { id: 1, distribuidor: '20th Century Fox'},
      { id: 2, distribuidor: 'Paramount Pictures'},
      { id: 3, distribuidor: 'MTV Films'},
      { id: 4, distribuidor: 'Nickelodeon Movies'},
      { id: 5, distribuidor: 'DreamWorks'},
      { id: 6, distribuidor: 'Sony Pictures'},
      { id: 7, distribuidor: 'Columbia Pictures'},
      { id: 8, distribuidor: 'TriStar Pictures'},
      { id: 9, distribuidor: 'NBC Universal'},
      { id: 10,	distribuidor: 'Universal Studios'},
      { id: 11,	distribuidor: 'Warner Bros.'},
      { id: 12,	distribuidor: 'New Line Cinema'},
      { id: 13,	distribuidor: 'HBO Films'},
      { id: 14,	distribuidor: 'Disney Channel'},
      { id: 15,	distribuidor: 'Walt Disney Pictures'},
      { id: 16, distribuidor: 'Hollywood Pictures'},
      { id: 17, distribuidor: 'Touchstone Pictures'},
      { id: 18, distribuidor: 'Pixar Animation'},
      { id: 19, distribuidor: 'Miramax Films'},
      { id: 20, distribuidor: 'Marvel Studios'},
      { id: 21, distribuidor: 'Lucasfilm'},
      { id: 22, distribuidor: 'ABC Studios.'},
      { id: 23, distribuidor: 'Warner Independent'},
      { id: 24, distribuidor: 'Castle Rock'},
      { id: 25, distribuidor: 'Fox Filme'},
      { id: 26, distribuidor: 'Warner Home Video'},
      { id: 27, distribuidor: 'Europa Filmes'},
      { id: 28, distribuidor: 'Imagem Filmes'},
      { id: 29, distribuidor: 'Playarte Pictures'},
      { id: 30, distribuidor: 'Lightstar Pictures'},
      { id: 31, distribuidor: 'Netflix' },
      { id: 32, distribuidor: 'Warner Bros. Television Distribution' }
    ];

    distribuidores.sort(this.orderByDist);

    return distribuidores;
  }

  orderByGen(a, b){
    if (a.genero < b.genero)
     return -1;
    if (a.genero > b.genero)
      return 1;
    return 0;
  }

  getGeneros(){

    let generos = [
      { id: 1, genero: 'Ação'},
      { id: 2, genero: 'Animação'},
      { id: 3, genero: 'Aventura'},
      { id: 4, genero: 'Comédia'},
      { id: 5, genero: 'Comédia Romântica'},
      { id: 6, genero: 'Comédia Dramática'},
      { id: 7, genero: 'Cult'},
      { id: 8, genero: 'Dança'},
      { id: 9, genero: 'Documentário'},
      { id: 10,	genero: 'Drama'},
      { id: 11,	genero: 'Espioangem'},
      { id: 12,	genero: 'Fantasia'},
      { id: 13,	genero: 'Faroeste'},
      { id: 14,	genero: 'Ficção Científica'},
      { id: 15,	genero: 'Guerra'},
      { id: 16, genero: 'Musical'},
      { id: 17, genero: 'Policial'},
      { id: 18, genero: 'Romance'},
      { id: 19, genero: 'Suspense'},
      { id: 20, genero: 'Terror'}
    ];

    generos.sort(this.orderByGen);
	
    return generos;
  }

}
