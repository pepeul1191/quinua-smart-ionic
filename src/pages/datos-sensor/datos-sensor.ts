import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { reporte_sensor } from "../../app/data";
import { ToastController } from 'ionic-angular';
import { SensorProvider } from '../../providers/sensor/sensor';
import { Chart } from 'chart.js';
import { DATASETS } from "../../app/data";

@IonicPage()
@Component({
  selector: 'page-datos-sensor',
  templateUrl: 'datos-sensor.html',
})
export class DatosSensorPage {
  @ViewChild('reporteCanvas') reporteCanvas;
  public info_vista;
  public DATASETS;
  fecha_inicio:any;
  fecha_fin:any;
  sensor_id:any;
  reporte_id:any;
  reporte_url:any;
  reporteGrafica: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public sensorProvider: SensorProvider) {
    this.sensor_id = navParams.get('sensor_id');
    this.reporte_id = navParams.get('reporte_id');
    this.DATASETS = DATASETS;
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
        var axis_x = [];
        var data_max = [];
        var data_min = [];
        var data_avg = [];
        var dataset = null;
        var functionDataset = null;
        console.log(this.DATASETS);
        if(data instanceof Array){
          if(this.reporte_url == 'sensor/promedio_rango_fechas'){
            for (let entry of data) {
              axis_x.push(entry['dia']);
              data_avg.push(entry['promedio']);
            }
            functionDataset = this.DATASETS[this.reporte_url];
            dataset = functionDataset(data_avg);
          }
          if(this.reporte_url == 'sensor/maximo_minimo_rango_fechas'){
            for (let entry of data) {
              axis_x.push(entry['dia']);
              data_max.push(entry['maximo']);
              data_min.push(entry['minimo']);
            }
            functionDataset = this.DATASETS[this.reporte_url];
            dataset = functionDataset(data_max, data_min);
          }
          if(this.reporte_url == 'sensor/maximo_minimo_promedio_rango_fechas'){
            for (let entry of data) {
              axis_x.push(entry['dia']);
              data_max.push(entry['maximo']);
              data_min.push(entry['minimo']);
              data_avg.push(entry['promedio']);
            }
            functionDataset = this.DATASETS[this.reporte_url];
            dataset = functionDataset(data_max, data_min, data_avg);
          }
          if(this.reporte_url == 'sensor/rango_tiempo_dia'){
            for (let entry of data) {
              //TODO              
            }
          }
        }
        console.log(dataset);
        this.reporteGrafica = new Chart(this.reporteCanvas.nativeElement, {
          type: 'bar',
          data: {
            labels: axis_x,
            datasets: dataset
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
