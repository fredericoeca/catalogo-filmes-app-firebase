import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FilmesProvider } from '../providers/filmes/filmes';
import { FilmesPageModule } from '../pages/filmes/filmes.module';
import { InsFilmePageModule } from '../pages/ins-filme/ins-filme.module';
import { FilmesPage } from '../pages/filmes/filmes';
import { AuthProvider } from '../providers/auth/auth';
import { DetailsFilmePageModule } from '../pages/details-filme/details-filme.module';
import { DetailsFilmePage } from '../pages/details-filme/details-filme';
import { CartazFilmePage } from '../pages/cartaz-filme/cartaz-filme';
import { CartazFilmePageModule } from '../pages/cartaz-filme/cartaz-filme.module';
import { ArtistaProvider } from '../providers/artista/artista';
import { ArtistasPageModule } from '../pages/artistas/artistas.module';
import { InsArtistaPageModule } from '../pages/ins-artista/ins-artista.module';
import { FotoArtistaPageModule } from '../pages/foto-artista/foto-artista.module';
import { ArtistasPage } from '../pages/artistas/artistas';
import { FotoArtistaPage } from '../pages/foto-artista/foto-artista';
import { LoginPageModule } from '../pages/login/login.module';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { RegisterPageModule } from '../pages/register/register.module';
import { SeriesProvider } from '../providers/series/series';
import { InsSeriePageModule } from '../pages/ins-serie/ins-serie.module';
import { SeriesPageModule } from '../pages/series/series.module';
import { SeriesPage } from '../pages/series/series';
import { DetailsSeriePageModule } from '../pages/details-serie/details-serie.module';
import { DetailsSeriePage } from '../pages/details-serie/details-serie';
import { ModalEpisodePageModule } from '../pages/modal-episode/modal-episode.module';
import { ModalSeasonPageModule } from '../pages/modal-season/modal-season.module';
import { ElencoProvider } from '../providers/elenco/elenco';
import { EpisodioProvider } from '../providers/episodio/episodio';
import { TemporadaProvider } from '../providers/temporada/temporada';
 
// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyBNrYkDfiMrI1WO6PYYrci_JBkt-7l7QWQ",
  authDomain: "catalogo-filmes-e3659.firebaseapp.com",
  databaseURL: "https://catalogo-filmes-e3659.firebaseio.com",
  storageBucket: "catalogo-filmes-e3659.appspot.com",
  messagingSenderId: "180926139744"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    FilmesPageModule,
    InsFilmePageModule,
    DetailsFilmePageModule,
    CartazFilmePageModule,
    ArtistasPageModule,
    InsArtistaPageModule,
    FotoArtistaPageModule,
    LoginPageModule,
    RegisterPageModule,
    FotoArtistaPageModule,
    InsArtistaPageModule,
    InsSeriePageModule,
    SeriesPageModule,
    DetailsSeriePageModule,
    ModalEpisodePageModule,
    ModalSeasonPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FilmesPage,
    DetailsFilmePage,
    CartazFilmePage,
    ArtistasPage,
    FotoArtistaPage,
    LoginPage,
    RegisterPage,
    SeriesPage,
    DetailsSeriePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FilmesProvider,
    AuthProvider,
    ArtistaProvider,
    SeriesProvider,
    ElencoProvider,
    EpisodioProvider,
    TemporadaProvider
  ]
})
export class AppModule {}