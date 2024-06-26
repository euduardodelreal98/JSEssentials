/**
 * Advanced Function Parameters
 */


// Default Parameters Ej.1
function multiply(num1, num2 = 1)
{
    return num1 * num2;
}

console.log(multiply(2,3));

//Default Parameters Ej.2

function multiply(num1, num2 = 1)
{
    return num1 * num2;
}

console.log(multiply(2));

//Destructured Params ej.1
function showDetails([arg1, arg2])
{
    console.log(arg1);
    console.log(arg2);
}

showDetails(["Alex", "Andy", "Lalo"]);

//Destructured Params ej.2
function showDetailObject({name, country})
{
    console.log(name);
    console.log(country);
}

showDetailObject({name:"Mark", age:"25", country:"Mexico"});
