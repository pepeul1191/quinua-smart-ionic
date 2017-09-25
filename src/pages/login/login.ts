import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario/usuario';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {
    myIcon: string = "home";
    usuario:any;
    contrasenia:any;
    constructor(public navCtrl: NavController, public usuarioProvider: UsuarioProvider) {
        
    }
    ingresar() {
        //console.log('crap');
        //console.log('usuario' + this.usuario + ' - contraseña' + this.contrasenia);
        this.usuarioProvider.validar(this.usuario, this.contrasenia);
        console.log(this.usuarioProvider.rpta);
  }
}
