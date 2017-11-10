import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {STATIC_URL} from "../../app/data";

@IonicPage()
@Component({
  selector: 'page-estacion',
  templateUrl: 'estacion.html',
})
export class EstacionPage {
  public sensores;
  public STATIC_URL;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.sensores = navParams.get('sensores');
      this.STATIC_URL = STATIC_URL;
      console.log(['pages/estaciones', this.sensores]);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstacionPage');
  }

}
