import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EstacionProvider } from '../../providers/estacion/estacion';

@IonicPage()
@Component({
  selector: 'page-estaciones',
  templateUrl: 'estaciones.html',
})
export class EstacionesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public estacionProvider: EstacionProvider) {
    this.onLoad();
  }

  onLoad() {
    try {
        this.estacionProvider.listar();
        console.log(this.estacionProvider.rpta);
    }
    catch (e){
        console.log(e);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstacionesPage');
  }

}
