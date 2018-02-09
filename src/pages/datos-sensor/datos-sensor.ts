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
  hora_inicio:any;
  hora_fin:any;
  sensor_id:any;
  reporte_id:any;
  reporte_url:any;
  dia_medicion:any;
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
      if([1,2,3].indexOf(this.reporte_id) != -1){ //[1,2,3] debe corresponder a data.reporte_sensor[]
        this.sensorProvider.obtener_datos_rango_dias(this.sensor_id, this.reporte_url, this.fecha_inicio, this.fecha_fin).then((data) => {
          var axis_x = [];
          var data_max = [];
          var data_min = [];
          var data_avg = [];
          var dataset = null;
          var functionDataset = null;
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
            //console.log(dataset);
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
          }else{
            let toast = this.toastCtrl.create({
              message: 'No hay datos que mostrar en el rango de fechas selecionado',
              duration: 3000
            });
            toast.present();
          }
        });
      }
      if([4].indexOf(this.reporte_id) != -1){ //[4] debe corresponder a data.reporte_sensor[]
        this.sensorProvider.obtener_datos_rango_horas(this.sensor_id, this.reporte_url, this.dia_medicion, this.hora_inicio, this.hora_fin).then((data) => {
          var axis_x = [];
          var data_chart = [];
          var dataset = null;
          var functionDataset = null;
          if(data instanceof Array){
            if(this.reporte_url == 'sensor/rango_tiempo_dia'){
              for (let entry of data) {
                axis_x.push(entry['momento']);
                data_chart.push(entry['dato']);
              }
              functionDataset = this.DATASETS[this.reporte_url];
              dataset = functionDataset(data_chart);
              this.reporteGrafica = new Chart(this.reporteCanvas.nativeElement, {
                type: 'line',
                data: {
                  labels: axis_x,
                  datasets: dataset
                },
                options: {
                  scales: {
    
                  }
                }
              });
            }
          }else{
            let toast = this.toastCtrl.create({
              message: 'No hay datos que mostrar en el día y rango de horas/minutos selecionado',
              duration: 3000
            });
            toast.present();
          }
          /*
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
          */
        });
      }
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
