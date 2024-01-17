

// let list = document.getElementById("mostrar_lista");

// es mutable el push, unshift, shift, pop y slice, fill
const carro_marcas_arr1 =["Chevrolet","Hyundai","Toyota","Kia","Souest"];
carro_marcas_arr1.push("Renault",2);
console.log(carro_marcas_arr1);
carro_marcas_arr1.unshift(0);
console.log(carro_marcas_arr1);
carro_marcas_arr1.shift("kia",1);
console.log(carro_marcas_arr1);
carro_marcas_arr1.pop();
console.log(carro_marcas_arr1);
carro_marcas_arr1.splice(0,0,"Indurama","MANI","crema");
carro_marcas_arr1.fill("CHEVROLET",0,3) //SE REEMPLAZA LOS DATOS DESDE LA POSICION 0 HASTA EL 3
// mostrar_log(carro_marcas_arr1);
// carro_marcas_arr1.push(1,99,9);

// METODO INMUTABLE DECLARAR UN ARRAY Y COLOCAR EN PARENTESIS ...NOMBRE VAR_USADA
// O TAMBIEN EL DE CONCAT POR MEDIO DE UNA VARIABLE
const carro_marca_china_arr1=["Changan","Japan",...carro_marcas_arr1];
const concadenacion= carro_marcas_arr1.concat(carro_marca_china_arr1);
const con =concadenacion.slice(0,-17);
mostrar_html2("mostrar_lista2", con);

mostrar_log(carro_marca_china_arr1);
mostrar_html("mostrar_lista",carro_marcas_arr1);
// mostrar_html2("mostrar_lista2", carro_marca_china_arr1);

 

function mostrar_html2(element,arr_china){
      
      for (let j = 0; j < arr_china.length; j++) {
            // document.getElementById(element).innerHTML+=`<p>${arr_china[j]}</p>`;     
      }
}
  
function mostrar_html(element,arr){

      // document.getElementById(element).innerHTML="";

      for (let i = 0; i < arr.length; i++) {
            // document.getElementById(element).innerHTML+= `<p>${arr[i]}</p>`;

      }


}


function mostrar_log(prueba){

      console.log("este es el de prueba :"+ prueba);
};








//  Array.prototype.last = function() {
//     return this.length ? this[this.length - 1] : -1;
//   };
//   console.log("hola");



//       // declarar y agg contenido de un array
//       const arr = ["manzana", "uva", "pera"];
//       document.getElementById("mostrar").innerHTML = arr;
//       arr.push("bananas");
//       document.getElementById("mostrar2").innerHTML = arr;

//       // funcion de tipado con conversion
//       console.log(Number(200.23232));
//       console.log(Number(200.232323).toString());
//       // console.log(parseFloat(300.2232));
//       console.log(parseFloat("200"));
//       console.log("10" == 10);
//       console.log(Number("10") == 10);
//       // boleanos
//       console.log(Boolean(1) + " con numero 1"); //verdadero
//       console.log(Boolean(0) + " con numero 0"); //falso
//       console.log(Boolean("asddawdaw") + " con cualquier caracter"); // cualquier caracter puesto evalua true
//       console.log(Boolean("") + " estando vacio"); //cuando está vacilo  evalua false
//       // Tipos de operadores de comparacion
//       // == igual
//       // === estrictamente igual
//       // != desigual
//       // !== desigualdad estricta
//       // x > y mayor que o x >= y mayor o igual que
//       // x < Y menor que o x <= y menor o igual que

//       let edad = "10";
//       let resultado_estrict = edad === 10;
//       let resultado_no_estrict = edad == 10;
//       console.log(
//         "este es con el operador estricto '10'=== 10 es:" + resultado_estrict
//       );
//       console.log(
//         "este es sin el operador estricto '10'== 10 es:" + resultado_no_estrict
//       );
//       // prompt(); esto hara que muestre una ventana que indica que debe introducir algún valor

//       // EXPRESION DE FUNCION
//       let funcion_hola = function () {
//         console.log("hola que tal");
//       }; // se diferencia de la nativa a que la definicion debe estar primero que a la llamada del mismo
//       funcion_hola();
//       // DECLARAR OBJETOS CONSTANTES
//       const obj_cars = {
//         modelo: "hyundai",
//         año: 2005,
//         color: "Azul",
//         placa: "ICG109",
//       };

//       // ALCANCE DE FUNCION Y BLOQUE
//       function mensaje(nombre) {
//         let msg = "hola como estas " + nombre;
//         if (nombre) {
//           // var msg= "hola como estas "+ nombre;   // aqui el var puede ser utilizado tanto en el bloque de condicion/ciclos dentro de una funcion
//           // let msg= "hola como estas "+ nombre;  // aqui el let puede ser utilizado solamente en el bloque donde lo están utilizando y sus subloques
//           console.log("dentro del if: " + msg);
//           if (msg) console.log("si esta en el subbloque el: " + msg);
//         }
//         console.log(msg);
//       }
//       mensaje("eddy");

//       //ARGUMENTOS FUNCIONES
//       function sumartodo() {
//         console.log(arguments); // esto sirver para ver todos los arqumentos (valores) que estan pasando en los parametros de la funcion
//       }

//       sumartodo(100, 20, 3000, 4); // este metodo de aruguments lo puedo utilizar para el uso de recorrer con for o while el numero de valores que se esan pasando

//       //FUNCION PURA
//       //se la considera pura ya que el valor de los parametros que se pasan en la funcion se realiza una accion para que no cambie el valor original despues del
//       //uso de la variable en dicha funcion
//       let edades = [20];
//       function modificador(edades) {
//         let copia = [...edades]; // copia
//         copia[0] = "25";
//         return copia;
//       }
//       let r = modificador(edades);
//       console.log("esto es solo edades : " + edades);
//       modificador(edades);
//       console.log("esto es edades despúes de la función : " + edades);
//       console.log(
//         "esto es la inmutabilidad, es decir que no cambia su valor: " + r
//       );

      // ARREGLOS
      // let arreglo = ["hola", "como estas", 2, 3, {}, function () {}, [1, 23]];
      // console.log("presenta el arreglo: " + arreglo);
      // arreglo.pop(); // destruye el parametro final del arreglo
      // console.log("este es con pop: " + arreglo);
      // arreglo.shift(); // destruye el parametro del principio al arreglo
      // console.log("este es con shift: " + arreglo);
      // arreglo.push("ultimo"); // pone el parametro al final del arreglo
      // console.log("este es con push: " + arreglo);
      // arreglo.unshift("primero"); // pone el parametro al principio del arreglo
      // console.log("este es con unshift: " + arreglo);

      // //METODOS DE UN ARREGLO
      // console.log("¨¨¨¨METODOS DE UN ARREGLO CON FOR ¨¨");
      // console.log(arreglo.length);
      // for (let i = 0; i < arreglo.length; i++) {
      //   let element = arreglo[i];
      //   console.log(element);
      // }
      // console.log("¨¨¨¨METODOS DE UN ARREGLO CON METODO DE FOREACH ¨¨");
      // arreglo.forEach(function (element) {
      //   console.log(element);
      // });

      // // FUNCIONES
      // function mostrar_result(valor) {
      //   document.getElementById("consola_ejemplo").innerHTML = obj_cars.placa;

      //   // document.getElementById('consola_ejemplo').innerHTML=obj_cars;
      // }
      
// ****************DEFINICIONES

