import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { STATIC_URL } from "../../app/data";
import { DatosSensorPage } from '../../pages/datos-sensor/datos-sensor';

@IonicPage()
@Component({
  selector: 'page-estacion',
  templateUrl: 'estacion.html',
})
export class EstacionPage {
  public sensores;
  public STATIC_URL;

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController) {
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
  mostrar_opciones(estacion_id) {
        let actionSheet = this.actionSheetCtrl.create({
            title: 'Seleccione un tipo de reporte',
            buttons: [
                {
                    text: 'Promedio por día en rango de fechas',
                    handler: () => {
                        this.navCtrl.push(DatosSensorPage, {estacion_id : estacion_id, reporte_id: 1});
                    }
                },
                {
                    text: 'Máximo y minimo en rango de fechas',
                    handler: () => {
                        this.navCtrl.push(DatosSensorPage, {estacion_id : estacion_id, reporte_id: 2});
                    }
                },
                {
                    text: 'Máximo, minimo y promedio en rango de fechas',
                    handler: () => {
                        this.navCtrl.push(DatosSensorPage, {estacion_id : estacion_id, reporte_id: 3});
                    }
                },
                {
                    text: 'Mediciones por rango de tiempo de un día',
                    handler: () => {
                        this.navCtrl.push(DatosSensorPage, {estacion_id : estacion_id, reporte_id: 4});
                    }
                },
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: () => {
                    
                    }
                }
            ]
        });

        actionSheet.present();
  }

}
