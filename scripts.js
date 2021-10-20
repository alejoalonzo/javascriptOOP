
/*************************ACTIVIDAD UF2. dev: ALEJANDRO ALONZO */


/*Ejercicio Objetos (4 ptos.)---------------------------------------------------------------------------------------------------
Apartado 1
Diseña un objeto “Colegio”. Dicho objeto tendrá como atributos “nombre”,
“numeroAulas” y “numeroAlumnos”.
Cada alumno se representará como una instancia de la clase “Alumno”. En ella se
guardarán los atributos “DNI”, “nombre” y “notaMedia”.
Implementa métodos en Colegio para saber la media de alumnos por aula y en Alumno
para conocer la nota media.*/

var miColegio1 = new Colegio('Santa Teresa', 26, 544);
var alumno1 = new Alumno();
//Builders------------------------------------------------------------
function Colegio(nombreColegio, nummeroAulas, numeroAlumnos){
    this.nombre = nombreColegio;
    this.nummeroAulas = nummeroAulas;
    this.numeroAlumnos = numeroAlumnos;
};

function Alumno(){
    this.dniAlumno = '';
    this.nombreAlumno = '';
    this.notaMediaAlumno = 8.5;
};//-------------------------------------------------------------------

var mediaAlumAula = mediaAlumnosPorAula();
alert("la media de alumnos por aula es de: " + mediaAlumAula.toFixed(2));
alert('La nota media del alumno es: ' + alumno1.notaMediaAlumno);


//Functions-----------------------------------------------------------
function  mediaAlumnosPorAula(){
    var media = miColegio1.numeroAlumnos / miColegio1.nummeroAulas;
    return media;
};



/*Apartado 2-------------------------------------------------------------------------------------------------------------------
Diseña un objeto “Aeropuerto”. Tendrá como atributos “nombre”, “ciudad” y
“numeroVuelosDiarios”.
Cada vuelo diario se representará como una instancia del objeto “Vuelo”. En ella se
guardarán los atributos “codigo”, “hora_llegada” y “hora_salida”.
Implementa métodos en aeropuerto y vuelo para saber la hora de llegada, para saber
la hora de salida y para comprobar si la hora de salida es posterior a la hora de llegada.*/


var aeropuertoElPrat = new Aeropuerto('El prat', 'Barcelona', '345');
var vuelo1 =  new Vuelo ('IB6245',12.45 , 10.25 );

function Aeropuerto(nombreAeropuerto, ciudadAeropuerto, numeroDeVuelosAeropuerto){
    this.nombreAeropuerto = nombreAeropuerto;
    this.ciudadAeropuerto = ciudadAeropuerto;
    this.numeroDeVuelosAeropuerto = numeroDeVuelosAeropuerto;
};
function Vuelo(codigoVuelo, horaLlegada, horaSalida){
    this.codigoVuelo = codigoVuelo;
    this.horaLlegada = horaLlegada;
    this.horaSalida = horaSalida;   
};


function comprobarSiSalidaEsPosteriorALlegada(){
    if (this.horaSalida > this.horaLlegada){
        alert('Lahora de salida es porterior a la de llegada');
    }else{
        alert('Lahora de salida no es porterior a la de llegada');
    };
};

var horaLlegadaVuelo1 = vuelo1.horaLlegada;
var horaSalidaVuelo1 = vuelo1.horaSalida;
alert('El vuelo ' + vuelo1.codigoVuelo + ', sale a las: ' + horaSalidaVuelo1 + ' Y llega a su destino a las ' + horaLlegadaVuelo1);
comprobarSiSalidaEsPosteriorALlegada();


/*Ejercicio Arrays (3 ptos.)
Apartado 1---------------------------------------------------------------------------------------------------------------------------------------
Crea un programa que pida al usuario que introduzca el nombre de cada uno de los 11
jugadores de un equipo de fútbol, mostrando el dorsal del 1 al 11, de forma similar a la
siguiente:
“Introduce el nombre del jugador número 1: “
Una vez introducidos los once jugadores, el programa debe mostrar a través de un alert
la lista completa de dorsal-nombrejugador del equipo.
Para solicitar un valor del usuario utilizamos la sentencia “prompt” y deberás utilizar
arrays para el almacenamiento de los datos de los jugadores.
*/

var nombreJugadores = new Array();//creo array
for(var i=1; i<12; i++){//lo recorro
    var listaDeJugadores = prompt('Introduzca el nombre del jugador: '+[i]);//cada valor lo guardo en otra variable
    nombreJugadores.push("Nombre: " + listaDeJugadores + " Dorsal: " + [i] +"\n");//relleno el array con cada valor.
};
alert("El equipo completo: \n" + nombreJugadores);//lo imprimo


/*Apartado 2------------------------------------------------------------------------------------------------------------------------------------
Modifica el código anterior y crea un nuevo script que, además de los datos anteriores,
almacene también la posición del jugador en cuestión (portero, defensa, medio,
delantero…).
Una vez introducidos los 11 jugadores, se mostrará un mensaje a través de un alert en el
que aparecerá la lista completa de jugadores, dorsal y posición de cada uno de ellos.*/

var listaDefensas = [];
var defensas = nombreJugadores.slice(1,5);//divido el array y saco lo me interesa
for(var a=0; a< defensas.length; a++){
    listaDefensas.push('Defensa: ' + defensas[a]);//lo guardo en otro array mas pequeño   
};

var listaCentrocampistas = [];
var centrocampistas = nombreJugadores.slice(5,8);
for(var b=0; b< centrocampistas.length; b++){
    listaCentrocampistas.push('Centrocampista: ' + centrocampistas[b]);  
}

var listaDelanteros = [];
var delanteros = nombreJugadores.slice(8,11);
for(var c=0; c< centrocampistas.length; c++){
    listaDelanteros.push('Delantero: ' + delanteros[c]);  
}
var portero = 'Portero: '+nombreJugadores[0];



var infoCompleta = portero + listaDefensas + listaCentrocampistas +  listaDelanteros;


alert('Equipo completo con posición: \n'+infoCompleta);


/********************************************************VERSION 2************************************************* 
var posicionJugadores = new Array();//creo array
for(var j=1; j<12; j++){//lo recorro
    var listaPosicion = prompt('Introduzca la posición del jugador: '+[j]);//cada valor lo guardo en otra variable
    posicionJugadores.push("posición: " + listaPosicion + " del dorsal: " + [i] +"\n");//relleno el array con cada valor.
};
var infoCompleta = nombreJugadores.concat(posicionJugadores);

alert("El equipo completo y sus posiciones: \n"+infoCompleta);//lo imprimo

*******************************************************************************************************************/


/*Ejercicio funciones (3 ptos.)----------------------------------------------------------------------------------------------------------------
Crea una función que tome como parámetro de entrada el DNI de una persona (sin
letra) y devuelva como resultado el NIF (DNI+Letra). (Puedes encontrar el algoritmo en
Internet).*/

//El algoritmo es dividir el numero de DNI / 23, y el resto arrojara un numero de entre 0 y 22 que corresponde a la siguiete tabla:
//0-1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17-18-19-20-21-22
//T-R-W-A-G-M-Y-F-P-D-X -B -N -J -Z -S -Q -V -H -L -C -K -E

nif = retornarNif(20500500);//le mando el DNI
alert(nif);


function retornarNif(dni){
    var resto = dni%23;
    var letra = new Array('T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E');
    nif = dni + letra[resto];//Busco la letra en el array a partir del resto y se lo sumo al DNI. 
    return nif;
};

/*Crea una función que tome como parámetro una palabra que puede contener
mayúsculas y minúsculas y un segundo parámetro que tome los valores 0 o 1. Esta
función debe retornar toda la palabra escrita en minúsculas si el segundo parámetro es 0
o toda la palabra escrita en mayúsculas si el segundo parámetro es 1.*/


resultado = devolverPalabra('Pedro', 1);
alert(resultado);


function devolverPalabra(str, num){
    if( num == 0){
        var min = str.toLowerCase();
        return min;
    }else if (num == 1){
        may = str.toUpperCase();
        return may;
    }else{
        return alert('Debes enviar "0" o "1"');
    }
};



        //*************RETO 1 ****************/
        
        /* Utilidad 1: Gestor de discos de música (Uso de objetos)
        Necesitamos almacenar en un programa todos los discos de música que tenemos en
        casa. Vamos a utilizar y crear objetos, dado que es el mejor modo de guardar esta
        información.
        Crea un objeto “disco” que almacene la siguiente información:
        § Nombre del disco.
        § Grupo de música o cantante.
        § Año de publicación.
        § Tipo de música (podrá ser “rock”, “pop”, “punk” o “indie”);
        § Localización: almacenará un número de estantería.
        § Prestado: almacenará un valor booleano. Por defecto será false.
        Además, tendrá los siguientes métodos:
        § Un constructor sin parámetros (las 4 primeras propiedades serán cadenas vacías,
        la localización será 0 por defecto y prestado estará a false).
        § Un constructor con parámetros (se pasarán solo las cinco primeras propiedades;
        la propiedad prestado será false).
        § Un método que permitirá cambiar el número de estantería en la localización.
        § Un método que permitirá cambiar la propiedad Prestado.
        § Un método que muestre toda la información de un disco.
        § Guarda todo el código en un archivo llamado disco.js*/




        var miDisco1 = new Disco(
            'Supernatural',
            'Santana',
            '2001',
            'rock',
            1,
            false
        ); 
        //Builders------------------------------------------------
        function Disco(){
            this.nombreDisco = '';
            this.cantante = '';
            this.anyo = '';
            this.tipo = '';
            this.localizacion = 0;
            this.estaPrestado = false;
        };
        function Disco(nombreDisco, cantante, anyo, tipo, localizacion, estaPrestado){
            this.nombreDisco = nombreDisco;
            this.cantante = cantante;
            this.anyo = anyo;
            this.tipo = tipo;
            this.localizacion = localizacion;
            this.estaPrestado = estaPrestado;
        };
    
        //Development-------------------------------------------------------------------------------------
        
        alert(miDisco1.nombreDisco);
        alert(miDisco1.localizacion);
    
        cambioEstanteria(4);//le mando la estanteria nueva donde estrará
        alert("la nuva estanteria del disco " + miDisco1.nombreDisco + "es: " + miDisco1.localizacion );
    
        cambiarEstado(true);//le mando la estanteria nueva donde estrará
        alert("El disco  " + miDisco1.nombreDisco + "está prestado: " + miDisco1.estaPrestado );
        
        var info = print();
        alert(info);
    
        //Functions--------------------------------------------------------------------------------------
            function cambioEstanteria(estanteriaNueva){
                miDisco1.localizacion =  estanteriaNueva;
            };
    
            function cambiarEstado(nuevoEstado){
                miDisco1.estaPrestado = nuevoEstado;
            };
    
            function print(){
                var i = "INFORMACIÓN DEL DISCO: " + "\nNombre: " + miDisco1.nombreDisco + "\nCantante: " + miDisco1.cantante + "\nAño de lanzamiento: " 
                + miDisco1.anyo + " \nGenero musical: " + miDisco1.tipo + " \nEstanteríia: " + miDisco1.localizacion + " \nEstá prestado: " + miDisco1.estaPrestado;
                return i;
            };