export var DATASETS:any[]  = [
  {   
    'sensor/promedio_rango_fechas': function(data_max, data_min, data_avg){
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
    }
  },
  {
    'sensor/maximo_minimo_rango_fechas': function(data_max, data_min, data_avg){
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
    }
  },
  {
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
    }
  },
  {
    'sensor/rango_tiempo_dia': 'TODO'
  }
];
