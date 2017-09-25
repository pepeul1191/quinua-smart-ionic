import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { ApplicationPage } from '../../pages/application/application';

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
        //console.log('usuario' + this.usuario + ' - contraseña' + this.contrasenia);
        try {
            this.usuarioProvider.validar(this.usuario, this.contrasenia);
            if (this.usuarioProvider.rpta['existe'] == 'si'){
                this.navCtrl.push(ApplicationPage);
            }
        }
        catch (e){
            console.log(e);
        }
  }
}
