import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EstacionProvider } from '../../providers/estacion/estacion';
import { Geolocation } from '@ionic-native/geolocation';
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
    constructor(public navCtrl: NavController, public navParams: NavParams, public estacionProvider: EstacionProvider,) {
        //this.ionViewDidEnter();
    }
    ionViewDidLoad() {
        //console.log('ionViewDidLoad EstacionesPage');
        this.loadMap();
    }
    ionViewDidEnter() {
        try {
            this.estacionProvider.listar();
            console.log(this.estacionProvider.rpta);
            this.estaciones = this.estacionProvider.rpta;
            this.loadMap();
        } catch (e){
            console.log(e);
        } 
    }
    loadMap() {
        let latLng = new google.maps.LatLng(-10.569220973686791, -75.20462410000005);
 
        let mapOptions = {
            center: latLng,
            zoom: 5,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
    
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        /*
        this.estaciones.forEach(estacion => {
   
        });
        */
      }
}