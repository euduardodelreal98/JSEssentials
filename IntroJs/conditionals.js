let n = 10;
if(n>0)
{
    console.log('n is positive');
}
else if(n<0)
{
    console.log('n is negative');
}
else
{
    console.log('n is zero');
}

/**
 * Conditional parts of the below example
 * 1) Condition en el caso de esgte ejemplo es 'ege >= 18'
 * 2) Question mark 
 * 3) to be evaluated if the condition is satisfied en el caso de este ejemplo es:'Elegible'
 * 4) separeted for colon
 * 5) executed if the condition is not satisfied
 */

let ege = 21;
let sts  = ege >= 18 ? 'Elegible' : 'Not elegible';

console.log('Status:' + sts);

//Switch case condition
let choice = 'z';

switch (choice)
{
    case 'a':
        console.log('Trip to Paris');
    break;

    case 'b':
        console.log('Trip to New York');
    break;

    default: console.log('Trip to switzerland');
}
