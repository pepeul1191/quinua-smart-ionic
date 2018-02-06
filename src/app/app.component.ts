import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

//import { ApplicationPage } from '../pages/application/application';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage:any = ApplicationPage;
  rootPage:any = LoginPage;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private sqlite: SQLite) {
    platform.ready().then(() => {
      //INICIO : Database CREATE TABLES IF NOT EXIST
      this.sqlite.create({
          name: 'quinua.db',
          location: 'default'
      }).then((db: SQLiteObject) => {
          db.executeSql(
              'CREATE TABLE IF NOT EXISTS sesiones ' + 
              '(id	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, ' + 
              ' llave VARCHAR(20) NOT NULL, ' + 
              'valor VARCHAR(20)  NOT NULL' 
              +')'
          , {})
          .then(() => console.log('Executed SQL'))
          .catch(e => console.log(e));
      }).catch(
          e => console.log(e)
      );
      //FIN
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

