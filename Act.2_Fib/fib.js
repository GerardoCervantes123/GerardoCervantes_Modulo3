const ancho = Math.floor(Math.random()*10)+1;
const alto = Math.floor(Math.random()*10)+1;

let fib = [];

console.log(ancho);
console.log(alto);

let gusano = 0;
let Fibonacci = 1;
let numeros = 0;

for(var i=0; i<alto; i++)
{
    fib[i]=new Array();
    for(var j=0; j<ancho; j++)
    {
        gusano = Fibonacci;
        Fibonacci = numeros;
        numeros = Fibonacci + gusano;
        fib[i].push(numeros);
    }

    if(i%2!=0)
    {
        fib[i].reverse();
    }
}

console.log(fib);
