/**
 * Different ways to write arrow functions
 * Syntax1: (param1, param2,...) => {
 *  Satatemnt1
 *  Statemnt2
 * }
 * 
 * Syntax2: () => //Statement1
 * Syntax3: parameter1 => //statement1
 */

function greet(choice)
{
    choice();
}

// greet(function(){ console.log('Hellow world')});
greet(() => {console.log('Hellow world')});

let calculateTripCost = (ticketPrice, noOfPerson) => {
    totalCost = ticketPrice * noOfPerson;
    return totalCost;
}

console.log('Total cost: ' + calculateTripCost(500, 3));

//Syntax2
let trip = () => console.log('Lets go to trip');
trip();

//Syntax3
let trip1 = place => console.log('Lets go to trip '+ place);
trip1('Paris');


//**********************
// MATERIAL DE AYUDA

/*
    // Multi parameter, multi line code
    calculateCost = (ticketPrice, noOfPerson)=>{
        noOfPerson = ticketPrice * noOfPerson;
        return noOfPerson;
    }
    console.log(calculateCost(500, 2)); //1000

    //No parameter,single line code
    trip = () => "Lets go to trip."
    console.log(trip());    //// Lets go to trip.

    

    //One parameter, single line code
    let trip = place => "Trip to " + place;
    console.log(trip("Paris")); // Trip to Paris

    //One parameter, single line code:
    trip = _ => "Trip to " + _;
    console.log(trip("Paris"));  // Trip to Paris
*/
