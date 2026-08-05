//Ejerccio 1 Ternario

const usuario = { nombre: "Ana", edad: 16, suscripcion: "gratuita" };

//1
const acceso = usuario.edad >= 18 ? "Permitido" : "Denegado";
//2
const plan = usuario.suscripcion = "premium" ? "Premium": "Gratuito" ;
//3
const saludo = usuario.nombre != "" ? `Hola ${usuario.nombre}`: "Hola, invitado";
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
const badge = config.usuarioAdmin == true && "admin" 
//3
console.log(`"Notificaciones activas"`) && config.notificaciones == true

// Ejercicio 3

const pelicula = {
  titulo: "Interstellar",
  director: "Christopher Nolan",
  año: 2014,
  duracion: 169,
  genero: "Ciencia ficción"
};

const {titulo, director, año} = pelicula

const { duracion: duracionMinutos } = producto;
console.log(duracionMinutos);

const { calificacion = 0 } = producto;

console.log(calificacion); 