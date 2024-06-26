/**
 * Las variables que sean declaradas y nombradas dentro de un bloque de codigo
 * se van a llamar 'Scope variables'
 * Las variables que se encuentren dentro de una funcion, se llamaran 'Function scope variables'
 * Las variables que se encientren afuera dwe la funcion y del socpe se llamaran:
 * 'Global scope variables'
 */


let globalVar = 'Global variables';

function demo()
{
    let localVar = 'Local Variable';
    console.log(globalVar);
    console.log(localVar);
}

demo();


