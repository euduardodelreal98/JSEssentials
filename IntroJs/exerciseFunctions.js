/**
 * Problem Statement:
A teacher is in the process of generating few reports based on the marks scored by the students of her class in a project based assessment.


1: Assume that the marks of her 10 students are available in an array. 
2: The marks are out of 25.


Write a JavaScript program to implement the following functions:

find_more_than_average(): Find and return the percentage of students who have scored more than the average mark of the class.


generate_frequency(): Find how many students have scored the same marks. For example, how many have scored 0, how many have scored 1, how many have scored 2, and so on, find it up to how many have scored 25. The result should be populated in a list and returned.


Sample Input:
list_of_marks = [12,18,25,24,2,5,18,20,20,21]


Sample Output:
more than average: 70.0
frequency: [0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0, 2, 1, 0, 0, 1, 1
 */

let list_of_marks = [12,18,25,24,2,5,18,20,20,21];

// funcion para regresar el porcentaje de los estudiantes que sacaron  mas de la marca del promedio de la clase
function find_more_than_average(paramListMarks)
{   
    let size = paramListMarks.length;
    let average = 0;
    let contador = 0;
    let result;

    // Saca el promedio de la clase
    for(let i=0; i<size; i++)
    {
        average = average + paramListMarks[i];
    }
    average = average / 10;

    //compara cada calificacion de la lista con el average para sacar el porcentaje de alumnos que scaron mas del avarage
    for(let i=0; i<size; i++)
    {
        if(paramListMarks[i] > average)
        {
            contador ++;
        }
      
    }

    result = ((contador * 100) / size)
    return result;
}


function generate_frequency(list)
{
    let contFrequency = 0;
    const listFrequency = new Array();

    for(let i=0; i<=25; i++)
    {    
        contFrequency = 0;
        for(let j=0; j<=list.length; j++)
        {
            if(i == list[j])
            {
                contFrequency ++;
            }
        }
        listFrequency.push(contFrequency);        
    }  

    return listFrequency;
}

let average = find_more_than_average(list_of_marks);
console.log(average);

let frequency = generate_frequency(list_of_marks)
console.log(frequency);
