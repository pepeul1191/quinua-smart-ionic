import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {BASE_URL} from "../../app/data";
import { ToastController } from 'ionic-angular';

@Injectable()
export class SensorProvider {
   rpta: any;
   http: any;

  constructor(http: Http, public toastCtrl: ToastController) {
    this.http = http;
  }
  obtener_datos_rango_dias(sensor_id, reporte_url, fecha_inicio, fecha_fin) {
        //console.log(usuario);console.log(contrasenia);
        var headers = new Headers();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/x-www-form-urlencoded' );
        let options = new RequestOptions({ headers: headers });
        //let postParams = {};
        var link = BASE_URL + reporte_url + '?sensor_id=' + sensor_id + '&fecha_inicio=' + fecha_inicio + '&fecha_fin=' + fecha_fin;
      
        return new Promise(resolve => {this.http.get(link, options).subscribe(
            data => {
                //console.log(['estaciones', JSON.parse(data['_body'])]);
                resolve(JSON.parse(data['_body']));
            }, 
            error => {
                let toast = this.toastCtrl.create({
                    message: 'Ocurrió un error en la comunicación con el servidor',
                    duration: 3000
                });
                toast.present();
            })
        });
    }
    obtener_datos_rango_horas(sensor_id, reporte_url, dia_medicion, hora_inicio, hora_fin) {
        //console.log(usuario);console.log(contrasenia);
        var headers = new Headers();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/x-www-form-urlencoded' );
        let options = new RequestOptions({ headers: headers });
        //let postParams = {};
        var link = BASE_URL + reporte_url + '?dia_medicion=' + dia_medicion + '&sensor_id=' + sensor_id + '&hora_inicio=' + hora_inicio + '&hora_fin=' + hora_fin;
      
        return new Promise(resolve => {this.http.get(link, options).subscribe(
            data => {
                //console.log(['estaciones', JSON.parse(data['_body'])]);
                resolve(JSON.parse(data['_body']));
            }, 
            error => {
                let toast = this.toastCtrl.create({
                    message: 'Ocurrió un error en la comunicación con el servidor',
                    duration: 3000
                });
                toast.present();
            })
        });
    }
}
