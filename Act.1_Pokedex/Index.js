console.log('Bienvenido a la Pokedex');

class Pokemones
{
    constructor(nombre, naturaleza, tipo, nivel , vida, ataque, defensa, velocidad)
    {
        this.nombre=nombre;
        this.naturaleza=naturaleza;
        this.tipo=tipo;
        this.vida=vida;
        this.ataque=ataque;
        this.defensa=defensa;
        this.velocidad=velocidad;
        this.nivel=nivel;
    }

    nivelplus()
    {
        if(this.nivel == 100)
        {
            console.log('Su pokémon está a nivel máximo');
        }
        else
        {
            this.nivel++;
            console.log('Su pokemón ha subido de nivel ');
            console.log('El pokemon:' + this.nombre +' se encuentra en el nivel '+ this.nivel);
        }
        if(this.naturaleza == 'Audaz')
        {
            this.ataque += 4;
        }
        else if(this.naturaleza == 'Osada')
        {
            this.defensa += 4;
        }
        else if(this.naturaleza == 'Cauta')
        {
            this.vida += 4;
        }
        else if(this.naturaleza == 'Alegre')
        {
            this.velocidad += 4;
        }
    }
    presentarse()
    {
        console.log('Hola me llamo '+this.nombre+', soy tipo '+this.tipo+' y estoy al nivel '+this.nivel);
    }
    promedio()
    {
        var prom = (this.vida + this.ataque + this.defensa + this.velocidad)/4;
        console.log('Promedio de estadisticas: '+prom);
    }
}

const PIKACHU = new Pokemones('Pikachu', 'Audaz', 'Electrico', 90, 30, 40, 60, 10);
const CHARMANDER = new Pokemones('Charmander', 'Osada', 'Fuego', 70, 80, 65, 20, 25);
const SQUIRTLE = new Pokemones('Squirtle', 'Alegre', 'Agua', 25, 70, 25, 30, 20);
const BLASTOISE = new Pokemones('Blastoise', 'Audaz', 'Agua', 50, 100, 80, 25, 30);
const SNORLAX = new Pokemones('Snorlax', 'Alegre' , 'Normal', 35, 65, 45, 15, 5);
