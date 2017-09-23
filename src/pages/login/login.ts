import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {
    myIcon: string = "home";
    usuario:any;
    contrasenia:any;
    constructor(public navCtrl: NavController) {

    }
    ingresar() {
      console.log('crap');
      console.log('usuario' + this.usuario + ' - contraseña' + this.contrasenia);
  }
}
