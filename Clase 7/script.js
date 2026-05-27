//foreach no retorna nada
const  listas =  [1, 2, 3];
const objetos = { nombre: "Federico"};

console.log(objetos.nombre);

listas.forEach((elementoLista, index) => {
    console.log("elemento", elementoLista, "posicion", index);
});

console.log(objetos.nombre);

const arregloObjetos = [{nombre: "Federico"},{nombre: "Juan"}]

arregloObjetos.forEach((objeto)=>{
    console.log(objeto.nombre);
});
const personajes = [
    {nombre: "Gojo", poder: "Infinito"},
    {nombre: "Gojo", poder: "Infinito"},
    {nombre: "Gojo", poder: "Infinito"},
    {nombre: "Gojo", poder: "Infinito"},
];

function crearCard(personaje){
    return `
    <div class = "card">
        <h2>${personaje.nombre}</h2>
        <p>${personaje.poder}</p>
    </div>    
    `;
};

let html = "" ; 

personajes.forEach((personaje) => {
    html += crearCard(personaje);
});

document.querySelector("#grilla").innerHTML = html;