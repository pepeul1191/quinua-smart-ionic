import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the ApplicationPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-application',
  templateUrl: 'application.html'
})
export class ApplicationPage {

    estacionesRoot = 'EstacionesPage'
    dashboardRoot = 'DashboardPage'
    notificacionesRoot = 'NotificacionesPage'


    constructor(public navCtrl: NavController, public platform: Platform) {
        this.platform.ready().then(() => {
          this.platform.registerBackButtonAction(() => {
              navigator['app'].exitApp();                
          });
       });
    }

}
