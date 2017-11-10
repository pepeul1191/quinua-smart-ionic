import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-estacion',
  templateUrl: 'estacion.html',
})
export class EstacionPage {
  public sensores;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.sensores = navParams.get('sensores');
      console.log(['pages/estaciones', this.sensores]);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstacionPage');
  }

}
