import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EstacionProvider } from '../../providers/estacion/estacion';
import { ToastController } from 'ionic-angular';
import 'rxjs/add/operator/map';
declare var google;

@IonicPage()
@Component({
  selector: 'page-estaciones',
  templateUrl: 'estaciones.html',
})
export class EstacionesPage {
    @ViewChild('map') mapElement: ElementRef;
    map: any;
    estaciones:any;
    constructor(public navCtrl: NavController, public navParams: NavParams, public estacionProvider: EstacionProvider, public toastCtrl: ToastController) {
        //this.ionViewDidEnter();
    }
    ionViewDidLoad() {
        //console.log('ionViewDidLoad EstacionesPage');
        try {
            this.estacionProvider.listar().then((estaciones) => {
                this.loadMap(estaciones);
            });
        } catch (e){
            console.log(e);
            let toast = this.toastCtrl.create({
                message: 'Ocurrió un error en listar las estaciones de monitoreo - ionViewDidLoad',
                duration: 3000
            });
            toast.present();
        } 
    }
    ionViewDidEnter() {
        try {
            this.estacionProvider.listar().then((estaciones) => {
                this.loadMap(estaciones);
            });
        } catch (e){
            console.log(e);
            let toast = this.toastCtrl.create({
                message: 'Ocurrió un error en listar las estaciones de monitoreo - ionViewDidEnter',
                duration: 3000
            });
            toast.present();
        } 
    }
    loadMap(estaciones) {
        let latLng = new google.maps.LatLng(-10.569220973686791, -75.20462410000005);
 
        let mapOptions = {
            center: latLng,
            zoom: 5,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
    
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        
        if(this.estaciones != null){
            this.estaciones.forEach(estacion => {
                var position = new google.maps.LatLng(estacion.latitud, estacion.longitud);
                var estacionMarker = new google.maps.Marker({position: position, title: estacion.title});
                estacionMarker.setMap(this.map);
            });
        }
    }
}