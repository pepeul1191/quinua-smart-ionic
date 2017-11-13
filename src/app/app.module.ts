import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SQLite } from '@ionic-native/sqlite';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ApplicationPage } from '../pages/application/application';
import { EstacionPage } from '../pages/estacion/estacion';
import { DatosSensorPage } from '../pages/datos-sensor/datos-sensor';

import { UsuarioProvider } from '../providers/usuario/usuario';
import { EstacionProvider } from '../providers/estacion/estacion';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ApplicationPage,
    EstacionPage,
    DatosSensorPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    ApplicationPage,
    EstacionPage,
    DatosSensorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuarioProvider,
    EstacionProvider,
  ]
})
export class AppModule {}
