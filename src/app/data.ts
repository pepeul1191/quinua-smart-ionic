export var BASE_URL:string = 'http://192.168.1.54:3025/';
export var STATIC_URL:string = 'http://192.168.1.54:3025/';
export var reporte_sensor:any = [
    {   
        'id' : 1 , 
        'nombre':'Promedio por día en rango de fechas', 
        'fecha_inicio' : true, 
        'fecha_fin' : true, 
        'hora_inicio' : false, 
        'hora_fin' : false,
        'url' : 'sensor/promedio_rango_fechas',
    },
    {
        'id' : 2 , 
        'nombre':'Máximo y minimo en rango de fechas', 
        'fecha_inicio' : true, 
        'fecha_fin' : true, 
        'hora_inicio' : false, 
        'hora_fin' : false,
        'url' : 'sensor/maximo_minimo_rango_fechas',
    },
    {
        'id' : 3 , 
        'nombre':'Máximo, minimo y promedio en rango de fechas', 
        'fecha_inicio' : true, 
        'fecha_fin' : true, 
        'hora_inicio' : false, 
        'hora_fin' : false,
        'url' : 'sensor/maximo_minimo_promedio_rango_fechas',
    },
    {
        'id' : 4 , 
        'nombre':'Mediciones por rango de tiempo de un día', 
        'fecha_inicio' : true, 
        'fecha_fin' : false, 
        'hora_inicio' : true, 
        'hora_fin' : true,
        'url' : 'sensor/rango_tiempo_dia',
    },
];
export var DATASETS:any  = 
    {   
      'sensor/promedio_rango_fechas': function(data_avg){
        return [
          {
            label: "Promedio",
            data: data_avg,
            backgroundColor: [
              "rgba(50,150,100,0.3)", "rgba(50,150,100,0.3)", "rgba(50,150,100,0.3)", "rgba(50,150,100,0.3)", "rgba(50,150,100,0.3)"
              ],
            borderColor: [
              "rgba(50,150,100,1)", "rgba(50,150,100,1)", "rgba(50,150,100,1)", "rgba(50,150,100,1)", "rgba(50,150,100,1)"
              ],
            borderWidth: 1
          }
        ]
      },
      'sensor/maximo_minimo_rango_fechas': function(data_max, data_min){
        return [
          {
            label: "Máximo",
            data: data_max,
            backgroundColor: [
              "rgba(10,20,30,0.3)","rgba(10,20,30,0.3)", "rgba(10,20,30,0.3)", "rgba(10,20,30,0.3)", "rgba(10,20,30,0.3)"
              ],
            borderColor: [
              "rgba(10,20,30,1)", "rgba(10,20,30,1)", "rgba(10,20,30,1)", "rgba(10,20,30,1)", "rgba(10,20,30,1)"
              ],
            borderWidth: 1
          },
          {
            label: "Mínimo",
            data: data_min,
            backgroundColor: [
              "rgba(50,150,200,0.3)", "rgba(50,150,200,0.3)", "rgba(50,150,200,0.3)", "rgba(50,150,200,0.3)", "rgba(50,150,200,0.3)"
              ],
            borderColor: [
              "rgba(50,150,200,1)", "rgba(50,150,200,1)", "rgba(50,150,200,1)", "rgba(50,150,200,1)", "rgba(50,150,200,1)"
              ],
            borderWidth: 1
          },
        ]
      },
      'sensor/maximo_minimo_promedio_rango_fechas': function(data_max, data_min, data_avg){
        return [
          {
            label: "Máximo",
            data: data_max,
            backgroundColor: [
              "rgba(10,20,30,0.3)","rgba(10,20,30,0.3)", "rgba(10,20,30,0.3)", "rgba(10,20,30,0.3)", "rgba(10,20,30,0.3)"
              ],
            borderColor: [
              "rgba(10,20,30,1)", "rgba(10,20,30,1)", "rgba(10,20,30,1)", "rgba(10,20,30,1)", "rgba(10,20,30,1)"
              ],
            borderWidth: 1
          },
          {
            label: "Mínimo",
            data: data_min,
            backgroundColor: [
              "rgba(50,150,200,0.3)", "rgba(50,150,200,0.3)", "rgba(50,150,200,0.3)", "rgba(50,150,200,0.3)", "rgba(50,150,200,0.3)"
              ],
            borderColor: [
              "rgba(50,150,200,1)", "rgba(50,150,200,1)", "rgba(50,150,200,1)", "rgba(50,150,200,1)", "rgba(50,150,200,1)"
              ],
            borderWidth: 1
          },
          {
            label: "Promedio",
            data: data_avg,
            backgroundColor: [
              "rgba(50,150,100,0.3)", "rgba(50,150,100,0.3)", "rgba(50,150,100,0.3)", "rgba(50,150,100,0.3)", "rgba(50,150,100,0.3)"
              ],
            borderColor: [
              "rgba(50,150,100,1)", "rgba(50,150,100,1)", "rgba(50,150,100,1)", "rgba(50,150,100,1)", "rgba(50,150,100,1)"
              ],
            borderWidth: 1
          }
        ]
      },
      'sensor/rango_tiempo_dia': function(data_chart){
        return [
          {
            label: "Datos de un día",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: data_chart
          },
        ]
      }
    }
;
  