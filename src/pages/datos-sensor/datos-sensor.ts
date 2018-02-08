import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { reporte_sensor } from "../../app/data";
import { ToastController } from 'ionic-angular';
import { SensorProvider } from '../../providers/sensor/sensor';
import { Chart } from 'chart.js';

@IonicPage()
@Component({
  selector: 'page-datos-sensor',
  templateUrl: 'datos-sensor.html',
})
export class DatosSensorPage {
  @ViewChild('reporteCanvas') reporteCanvas;
  public info_vista;
  fecha_inicio:any;
  fecha_fin:any;
  sensor_id:any;
  reporte_id:any;
  reporte_url:any;
  reporteGrafica: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public sensorProvider: SensorProvider) {
    this.sensor_id = navParams.get('sensor_id');
    this.reporte_id = navParams.get('reporte_id');
    reporte_sensor.forEach(dato_vista => {
      if(dato_vista.id == this.reporte_id){
        this.info_vista = dato_vista;
        this.reporte_url = dato_vista.url;
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatosSensorPage');
  }

  reporte(tipo) {
    try {
      this.sensorProvider.obtener_datos(this.sensor_id, this.reporte_url, this.fecha_inicio, this.fecha_fin).then((data) => {
        var data_chart = [];
        var axis_x = [];
        var data_max = [];
        var data_min = [];
        var data_avg = [];
        console.log(data);
        if(data instanceof Array){
          for (let entry of data) {
            //data_chart.push(entry['dato']);
            axis_x.push(entry['dia']);
            data_max.push(entry['maximo']);
            data_min.push(entry['minimo']);
            data_avg.push(entry['promedio']);
          }
        }
        this.reporteGrafica = new Chart(this.reporteCanvas.nativeElement, {
          type: 'bar',
          data: {
            labels: axis_x,
            datasets: [
              {
                label: "Máximo",
                data: data_max,
                backgroundColor: [
                  "rgba(10,20,30,0.3)",
                  "rgba(10,20,30,0.3)",
                  "rgba(10,20,30,0.3)",
                  "rgba(10,20,30,0.3)",
                  "rgba(10,20,30,0.3)"
                ],
                borderColor: [
                  "rgba(10,20,30,1)",
                  "rgba(10,20,30,1)",
                  "rgba(10,20,30,1)",
                  "rgba(10,20,30,1)",
                  "rgba(10,20,30,1)"
                ],
                borderWidth: 1
              },
              {
                label: "Mínimo",
                data: data_min,
                backgroundColor: [
                  "rgba(50,150,200,0.3)",
                  "rgba(50,150,200,0.3)",
                  "rgba(50,150,200,0.3)",
                  "rgba(50,150,200,0.3)",
                  "rgba(50,150,200,0.3)"
                ],
                borderColor: [
                  "rgba(50,150,200,1)",
                  "rgba(50,150,200,1)",
                  "rgba(50,150,200,1)",
                  "rgba(50,150,200,1)",
                  "rgba(50,150,200,1)"
                ],
                borderWidth: 1
              },
              {
                label: "Promedio",
                data: data_avg,
                backgroundColor: [
                  "rgba(50,150,100,0.3)",
                  "rgba(50,150,100,0.3)",
                  "rgba(50,150,100,0.3)",
                  "rgba(50,150,100,0.3)",
                  "rgba(50,150,100,0.3)"
                ],
                borderColor: [
                  "rgba(50,150,100,1)",
                  "rgba(50,150,100,1)",
                  "rgba(50,150,100,1)",
                  "rgba(50,150,100,1)",
                  "rgba(50,150,100,1)"
                ],
                borderWidth: 1
              }
            ]
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero:true
                }
              }]
            }
          }
        });
      });
    }
    catch (e){
      //console.log(e);
      let toast = this.toastCtrl.create({
      message: 'Ocurrió un error en mostrar los datos',
      duration: 3000
      });
      toast.present();
    }
  }
}
