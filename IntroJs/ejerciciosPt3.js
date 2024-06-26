let r = 0;
let temp = '';

for(let i=0; i<5; i++)
{
    for(let j=1; j<=i; j++)
    {
        temp = temp + j;
    }
    temp = temp + "\n";
}
console.log (temp);
