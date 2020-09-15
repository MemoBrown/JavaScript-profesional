// boolean
let muted: boolean = true;
muted = false;

// numeros
let numerador: number = 42;
let denominador: number = 6;
let resultado = numerador / denominador;

//string
let nombre: string = 'Guillermo';
let saludo = `Me llamo ${nombre}`;

//arreglos
let people: string[] = [];
people = ["Isabel", "Nicole", "Raul"]

// people.push("9000")
let peopleAndNumbers: Array< string | number > = [];
peopleAndNumbers.push('Guillermo');
peopleAndNumbers.push(9000)

//enum
enum Color {
  Rojo = "Rojo",
  Verde = "Verde",
  Azul = "Azul",
}

let colorFavorito: Color = Color.Azul;
console.log(`Mi color favorito es ${colorFavorito}`)

//any
let comodin: any = "Joker";
comodin = { type : 'Wildcar' };

//object

let someObject: object = { type : 'Wildcar' };