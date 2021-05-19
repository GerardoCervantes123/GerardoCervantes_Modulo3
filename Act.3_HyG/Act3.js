function preguntas()
{
    opc = confirm('Empezar');
    for(let i=0; i<=1; i++)
    {
        if(opc)
        {
            do{
                res = prompt('Escriba "Derecha" o "Izquierda" según el camino que quiera escoger');
            }while(res!== 'Izquierda' && res !== 'Derecha');
        }  
        hora = Date;
        document.cookie='cookie'+i+'='+res ; '';
    }

    let cookies = document.cookie;
        let arrcookies = cookies.split('; ');
        let arreglo = [];
        for (const valor of arrcookies) 
        {
            cookies = valor.split('=');
            arreglo.push(cookies);           
        }    

    console.log(arrcookies);
    console.log(arreglo);

    let opt1 = arreglo[0][1];
    let opt2 = arreglo[1][1];
    console.log(opt1);
    console.log(opt2);

    if(opt1 === 'Izquierda' && opt2 ==='Izquierda')
    {
        window.location = "./correcto.html";
    }
    else if(opt1 === 'Izquierda' && opt2 ==='Derecha')
    {
        window.location = "./caminoarbol.html";
    }
    else if(opt1 === 'Derecha' && opt2 ==='Izquierda')
    {
        window.location = "./caminohongo.html";
    }
    else if(opt1 === 'Derecha' && opt2 ==='Derecha')
    {
        window.location = "./caminobruja.html";
    }
}

if(document.cookie !== "")
{
    console.log('NULL');
    document.cookie= "cookie0=null expires= ";
}
else
{
    console.log('fin');
}

console.log(document.cookie);
   
let hora = new Date();
hora.setTime(hora.getTime()+1000*20*15); 
let Temporizador = setTimeout(preguntas, 1000);
console.log('.');


