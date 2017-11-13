import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { reporte_sensor } from "../../app/data";

@IonicPage()
@Component({
  selector: 'page-datos-sensor',
  templateUrl: 'datos-sensor.html',
})
export class DatosSensorPage {
  public info_vista;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    var estacion_id = navParams.get('estacion_id');
    var reporte_id = navParams.get('reporte_id');
    reporte_sensor.forEach(dato_vista => {
      if(dato_vista.id == reporte_id){
        this.info_vista = dato_vista;
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatosSensorPage');
  }

}
