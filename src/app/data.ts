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
        'url' : '',
    },
];
