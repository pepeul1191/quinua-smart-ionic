import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UsuarioProvider {
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
        var link = 'http://192.168.1.3:3000/usuario/validar?usuario=' + usuario + '&contrasenia=' + contrasenia;
        
        return this.http.post(link, postParams, options)
            .subscribe(data => {
                console.log(data);
            }, error => {
                console.log("Oooops!");
        });
    }
}