//Ejerccio 1 Ternario

const usuario = { nombre: "Ana", edad: 16, suscripcion: "gratuita" };

//1
const acceso = usuario.edad >= 18 ? "Permitido" : "Denegado";
//2
const plan = usuario.suscripcion === "premium" ? "Premium": "Gratuito" ;
//3
const saludo = usuario.nombre ? `Hola ${usuario.nombre}`: "Hola, invitado";
console.log(saludo)

// Ejercicio 2

const config = {
  tema: "oscuro",
  idioma: "",
  notificaciones: true,
  usuarioAdmin: false
};
//1
const idioma = config.idioma || "Español";
//2
const badge = config.usuarioAdmin && "admin" 
//3
config.notificaciones && console.log("Notificaciones activas")

// Ejercicio 3

const pelicula = {
  titulo: "Interstellar",
  director: "Christopher Nolan",
  año: 2014,
  duracion: 169,
  genero: "Ciencia ficción"
};

//1
const { titulo, director, año } = pelicula

//2
const { duracion: duracionMinutos } = pelicula;
console.log(duracionMinutos);

//3
const { calificacion = "Sin calificar" } = pelicula
console.log(calificacion); 


//4 
function mostrarPelicula({ titulo, año, director }) {
  return `${titulo} (${año}) - Dir. ${director}`;
}
console.log(mostrarPelicula(pelicula));

// Ejercicio 4
const coordenadas = [40.7128, -74.0060, 10];
const colores = ["rojo", "verde", "azul", "amarillo"];

//1 
const [latitud, longitud, altitud] = coordenadas;

//2 
const [primero,,, ultimo] = colores;

//3 
const [primeroColor, ...resto] = colores;


// Ejercicio 5
const base = { marca: "Samsung", modelo: "Galaxy S24", precio: 180000 };
const descuento = { precio: 150000, enOferta: true };

//1 
const copiaBase = { ...base };

//2 
const oferta = { ...base, ...descuento };

//3 
const combinado = { ...base, ...descuento };

//4 
const carrito = ["auriculares", "teclado"];
const carritoActualizado = [...carrito, "mouse"];


// Ejercicio 6

import { formatearPrecio, calcularDescuento, estaDisponible } from "./utilidades.js";

console.log(formatearPrecio(120000)); // "$120.000"
console.log(calcularDescuento(10000, 20)); //8000
console.log(estaDisponible(0)); //false
console.log(estaDisponible(5)); // true


// Ejercicio 7
const equipo = [
  { id: 1, nombre: "Ana", rol: "desarrolladora", activo: true, salario: 95000 },
  { id: 2, nombre: "Luis", rol: "diseñador", activo: false, salario: 80000 },
  { id: 3, nombre: "Carla", rol: "desarrolladora", activo: true, salario: 102000 },
  { id: 4, nombre: "Pedro", rol: "qa", activo: true, salario: 75000 },
  { id: 5, nombre: "Marta", rol: "desarrolladora", activo: false, salario: 98000 },
];

//1
function presentar({ nombre, rol }) {
  return `${nombre} - ${rol}`;
}

//2 
const estados = equipo.map(({ nombre, activo }) => ({
  nombre,
  estado: activo ? "Activo" : "Inactivo"
}));

//3 
const desarrolladorasConBono = equipo
  .filter(({ rol, activo }) => rol === "desarrolladora" && activo)
  .map(dev => ({ ...dev, salarioConBono: dev.salario + 10000 }));

//4 
function obtenerRol(persona) {
  return persona.nombre === "Ana" && "ADMIN" ||
         (persona.activo ? persona.rol.toUpperCase() : "Inactivo");
}
