let flag = false;
let pattern = '';

console.log( typeof( '5' + 5));

for(let i=0; i<4; i++)
{
    for(let j=0; j<=i; j++)
    {
        if(flag)
        {
            pattern = pattern + '#' ;
            console.log(pattern);
            flag = false;
        }
        else
        {
            pattern = pattern + '*';
            console.log(pattern);
            flag = true;    
        }
    }
}
