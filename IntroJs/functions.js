/**
 * Functions pueden ser asignados a una variable
 * Functions pueden ser pasados alrededor como el parametro de una funcion
 * Functions pueden retornar otras functions
 * A esto tambien se le llama como First class Citizen
 */


//Declarative fucntion
function add(num1, num2)
{
    return num1 + num2;
}

let result  = add(1,2);
console.log("Sum: ", result);

//Anonimus Funtion
function greet(choice)
{
    choice();
}
greet(function(){console.log('Soy el Lalo del Real')});

//Nota: Funciiones que accepten o regresen otras funciones son llamadas Higher Order Functions

//Function Expression
function greet(choice)
{
    let message = choice();
}

let message = function(){return 'Hellow World'};
greet(message);
