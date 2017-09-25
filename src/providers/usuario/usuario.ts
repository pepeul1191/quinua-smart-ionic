import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UsuarioProvider {
    rpta: any;
    constructor(private http: Http) {
        //console.log('Hello UsuarioProvider Provider');
    }
    validar(usuario, contrasenia) {
        //console.log(usuario);console.log(contrasenia);
        var headers = new Headers();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/x-www-form-urlencoded' );
        let options = new RequestOptions({ headers: headers });
        let postParams = {}
        var link = 'http://10.151.76.223:3000/usuario/validar?usuario=' + usuario + '&contrasenia=' + contrasenia;
        
        this.http.post(link, postParams, options)
            .subscribe(data => {
                //console.log(JSON.parse(data['_body']));
                this.rpta = JSON.parse(data['_body']);
            }
            , error => {
                console.log("Oooops!");
        });
    }
}