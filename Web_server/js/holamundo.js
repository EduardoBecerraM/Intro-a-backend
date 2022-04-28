'use strict' //modo estricto para programar con buenas practicas 

//imprime un mensaje en pantalla
console.log('Hola mundo desde Node.js, esto se vera en la terminal de comandos.')

//hacemos una operacion basica
console.log(2*5)

//Esta linea de comando es una instrucción de frontend JS, entones al ejecutar este archivo JS en NodeJS marcara error porque NodeJS es para backend
//console.log(Window)

//imprime en la consola todo lo relacionado con el modulo global
console.log(global)

//realizamon una funcion que lo que hara es imprimir en pantalla el mensaje "Hola Node.js" cada segundo.
setInterval(function(){
  console.log('Hola Node.js')
},1000)