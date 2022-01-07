// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  
  var palabra = nombre
  var primera = palabra.charAt(0)
  var resto = palabra.slice(1)
  var mayus = primera.toUpperCase (primera)
  var union = mayus + resto
  return union

}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
 function retornar (usuario, cb){
   return cb(usuario)
 }
 
  function despedida (nombre) {
    var despedida = 'Nos vemos ' + nombre
    return despedida
  }
  function saludo (nombre){
    var bienvenida = 'Bienvenido de nuevo ' + nombre + '!'
    return bienvenida
  }
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  function devolversuma (numero1, numero2, cb){
    return cb(numero1, numero2)
  }
  function operacion (numero1, numero2){
    var operacion = (numero1 + numero2) * numero2
    return operacion
  }
  function suma (n1, n2) {
    var suma  = n1 + n2
    return suma
  }
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
    var numeros = [1,2,3,4,5,6]

    function sumatotal(numero, suma){
      return suma
    }
    var suma = numeros.reduce(function (acc, elemento) {
    return acc + elemento;
    }); 
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  array = ['mati','mauro','lalo',1,3]
  array.forEach (function(elemento,indice){
    console.log(elemento)
  })
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  array = [4,6,10, 1, 3]
 multiplicar = array.map(function (elemento){
   return elemento * 2
 })
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  array = ['amsterdam','alemania','belgica','valencia']
   var filtro = array.filter(function (array){
     return array.charAt(0) == 'a'
   })
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
