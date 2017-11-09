import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { ApplicationPage } from '../../pages/application/application';
import { ToastController } from 'ionic-angular';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {
    myIcon: string = "home";
    usuario:any;
    contrasenia:any;
    constructor(public navCtrl: NavController, public usuarioProvider: UsuarioProvider, public toastCtrl: ToastController) {
        
    }
    ingresar() {
        //console.log('usuario' + this.usuario + ' - contraseña' + this.contrasenia);
        try {
            this.usuarioProvider.validar(this.usuario, this.contrasenia);
            console.log("1 +++++++++++++++++++++++++++++++++++++");
            console.log(this.usuarioProvider.rpta);
            console.log("2 +++++++++++++++++++++++++++++++++++++");
            if (this.usuarioProvider.rpta == 1){
                this.navCtrl.push(ApplicationPage);
            }else{
                let toast = this.toastCtrl.create({
                    message: 'Usuario y/o Contraseña Incorrectos',
                    duration: 3000
                });
                toast.present();
            }
        }
        catch (e){
            console.log(e);
        }
  }
}
