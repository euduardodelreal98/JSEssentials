/**
 * ejercicio1
 */
let key = "123";
key = 456;
console.log(typeof key);

/**
 * ejercicio2
 */
var str = "string";
if(str instanceof String){ 
    console.log("str is an instance of string"); 
}
else{
    console.log("str is not an instance of string");
}

// Pregunta 1
// What are conditionals statements in JS?
//In JS conditionals are those statements that helps to control the flow of code conditionally.
//They execute some block of code based on certain conditions
//JavaScript has if, if else and switch conditional statements.
/**
 * Pregunta 2
 * What are primitive data types in JavaScripts?
 * -string:
 * -number:
 * -boolean
 * -undefined:
 * -null:
 * -Symbol:
 * -BigInt:
 */
/**
 * Pregunta 3 
 * Explain the difference between declaring variables using let, var, const
 * 
 * Keyword	    Scope       Declaration	                Assignment
    let	        Block	    Redeclaration not allowed	Re-assigning allowed
    const	    Block	    Redeclaration not allowed	Re-assigning not allowed
    var	        Function	Redeclaration allowed	    Re-assigning allowed
 */

/**
 * Pregunta 4
 * Is JS a pass-by.reference or pass-by-value language?
 * JavaScript is primarily a pass-by-value language. This means that when you pass a variable 
 * to a function, a new copy of that variable is created within the function scope. 
 * Any changes made to the variable inside the function do not affect the original variable.
 * However, when you pass an object (including arrays and functions) to a function, 
 * the "value" is really a reference to the object. While the reference itself is passed by value,
 *  the object it points to is not copied or cloned. So, if you modify the properties of the object 
 * within the function, those changes will be visible outside the function.
 * 
 * Example:
 *  let num = 10;
    let obj = { value: 10 };
 
    function change(num, obj) {
        num = num * 2;
        obj.value = num;
    }
    change(num, obj);
    console.log(num);  // Output: 10
    console.log(obj.value);  // Outputs\: 20

    In this example, num is unchanged outside the function because it is passed by value, 
    while obj.value is changed because obj is passed by reference
 */
