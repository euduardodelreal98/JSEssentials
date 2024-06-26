// eval() :Es usada para ejecutar codigo JS representado como string
console.log(eval('2,3'));

// parseInt() :Hace un parse en un string y regresa los enteros
console.log(parseInt('1234gf5'));

// parseFloat() :Hace un parse en un string y regresa los Float
console.log(parseFloat('3.14a5'));

// isNaN() : Esta funcion es usada para determinar cuando un valor es de tipo Nan o no
console.log(isNaN(23));

//isFinite() : Esta funcion se utilza para saber si el valor pasado es finito o no.
console.log(isFinite(NaN));

//Number() :Esta funcion convierte el valor a un entero
let num;
num = Number('1223');
console.log('al tipo de valor nuevo es: ' + typeof(num));
console.log(Number('123'));

//String() :Esta funcion permite convertir a estring un valor.
