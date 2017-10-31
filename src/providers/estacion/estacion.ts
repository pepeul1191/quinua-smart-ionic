import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {BASE_URL} from "../../app/data";
import { ToastController } from 'ionic-angular';

@Injectable()
export class EstacionProvider {
    rpta: any;
    constructor(public http: Http, public toastCtrl: ToastController) {
      console.log('Hello EstacionProvider Provider');
    }
    listar() {
      //console.log(usuario);console.log(contrasenia);
      var headers = new Headers();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/x-www-form-urlencoded' );
      let options = new RequestOptions({ headers: headers });
      let postParams = {};
      var link = BASE_URL + 'estacion/listar';;
      
      this.http.get(link, options)
          .subscribe(data => {
              console.log(JSON.parse(data['_body']));
              this.rpta = JSON.parse(data['_body']);
          }
          , error => {
              let toast = this.toastCtrl.create({
                  message: 'Ocurrió un error en la comunicación con el servidor',
                  duration: 3000
              });
              toast.present();
      });
  }
}
