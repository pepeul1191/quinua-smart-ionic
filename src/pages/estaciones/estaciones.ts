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
    constructor(public navCtrl: NavController, public navParams: NavParams, public estacionProvider: EstacionProvider, public geolocation: Geolocation) {
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
        this.geolocation.getCurrentPosition().then((position) => {
            let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            let mapOptions = {
                center: latLng,
                zoom: 15, 
                mapTypeId: google.maps.MapTypeId.ROADMAP	
            }
            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
            }, (err) => {
                console.log(err);	
            }
        );
        /*
        this.estaciones.forEach(estacion => {
   
        });
        */
      }
}