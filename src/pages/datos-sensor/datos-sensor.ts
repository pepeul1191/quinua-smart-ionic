import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { reporte_sensor } from "../../app/data";
import { ToastController } from 'ionic-angular';
import { SensorProvider } from '../../providers/sensor/sensor';

@IonicPage()
@Component({
  selector: 'page-datos-sensor',
  templateUrl: 'datos-sensor.html',
})
export class DatosSensorPage {
  public info_vista;
  fecha_inicio:any;
  fecha_fin:any;
  sensor_id:any;
  reporte_id:any;
  reporte_url:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public sensorProvider: SensorProvider) {
    this.sensor_id = navParams.get('sensor_id');
    this.reporte_id = navParams.get('reporte_id');
    reporte_sensor.forEach(dato_vista => {
      if(dato_vista.id == this.reporte_id){
        this.info_vista = dato_vista;
        this.reporte_url = dato_vista.url;
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatosSensorPage');
  }

  reporte(tipo) {
        try {
            this.sensorProvider.obtener_datos(this.sensor_id, this.reporte_url, this.fecha_inicio, this.fecha_fin).then((rpta) => {
                console.log("rpta : " + rpta);
            });
        }
        catch (e){
            //console.log(e);
            let toast = this.toastCtrl.create({
                message: 'Ocurrió un error en mostrar los datos',
                duration: 3000
            });
            toast.present();
        }
    }
}
