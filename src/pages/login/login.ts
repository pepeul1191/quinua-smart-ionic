import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {
    myIcon: string = "home";
    constructor(public navCtrl: NavController) {

    }
}
