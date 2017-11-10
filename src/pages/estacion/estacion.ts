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
      var sensores = navParams.get('sensores');
      this.STATIC_URL = STATIC_URL;
      this.sensores = [];
      sensores.forEach(sensor => {
          switch(sensor.des_tipo) {
          case 'Grados centígrados (°C)':
              sensor.icon = 'sensor-temperatura';
              break;
          case 'nudo':
              sensor.icon = 'sensor-viento';
              break;
          case 'milibares':
              sensor.icon = 'sensor-lluvia';
              break;
          default:
              sensor.icon = 'football';
          }
          this.sensores.push(sensor); 
      });
      console.log(['pages/estaciones', this.sensores]);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstacionPage');
  }

}
