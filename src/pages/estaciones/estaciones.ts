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
        this.init('ionViewDidLoad') 
    }
    ionViewDidEnter() {
        this.init('ionViewDidEnter')
    }
    init(procedencia){
        try {
            this.estacionProvider.listar().then((estaciones) => {
                this.loadMap(estaciones);
            });
        } catch (e){
            console.log(e);
            let toast = this.toastCtrl.create({
                message: 'Ocurrió un error en listar las estaciones de monitoreo - ' + procedencia,
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
        
        if(estaciones != null){
            estaciones.forEach(estacion => {
                var position = new google.maps.LatLng(estacion.latitud, estacion.longitud);
                var estacionMarker = new google.maps.Marker({position: position, id: estacion.ide_estacion});
                let content = "<h4>Information!</h4>";   
                this.addInfoWindow(estacionMarker, content, estacion.ide_estacion);
                estacionMarker.setMap(this.map);
            });
        }
    }

    addInfoWindow(marker, content, estacion_id){
        let infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, 'click', () => {
            console.log(['ide_estacion', estacion_id]);
            infoWindow.open(this.map, marker);
        });
    }
    
    
}