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
  obtener_datos(sensor_id, fecha_inicio, fecha_fin) {
        //console.log(usuario);console.log(contrasenia);
        var headers = new Headers();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/x-www-form-urlencoded' );
        let options = new RequestOptions({ headers: headers });
        //let postParams = {};
        var link = BASE_URL + 'sensor/datos?sensor_id=' + sensor_id + '&fecha_inicio=' + fecha_inicio + '&fecha_fin=' + fecha_fin;
      
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
