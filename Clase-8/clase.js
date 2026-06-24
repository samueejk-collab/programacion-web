const productos = [
  { id: 1, nombre: "Auriculares Bluetooth",  categoria: "Electrónica", precio: 15000, stock: 8,  activo: true  },
  { id: 2, nombre: "Teclado Mecánico",       categoria: "Electrónica", precio: 22000, stock: 0,  activo: true  },
  { id: 3, nombre: "Silla Ergonómica",       categoria: "Muebles",     precio: 85000, stock: 3,  activo: true  },
  { id: 4, nombre: "Lámpara de Escritorio",  categoria: "Muebles",     precio: 9500,  stock: 12, activo: false },
  { id: 5, nombre: "Mouse  Inalámbrico",      categoria: "Electrónica", precio: 7800,  stock: 20, activo: true  },
  { id: 6, nombre: "Monitor 27\"",           categoria: "Electrónica", precio: 120000,stock: 2,  activo: true  },
  { id: 7, nombre: "Alfombra de Escritorio", categoria: "Muebles",     precio: 4200,  stock: 0,  activo: false },
  { id: 8, nombre: "Webcam HD",              categoria: "Electrónica", precio: 18000, stock: 5,  activo: true  },
];
//Ejercicio 1 map

const nombres = productos.map((producto) => {
  return producto.nombre
})
console.log(nombres)

//Ejercicio 2 map

const preciosConIVA = productos.map((producto) => {
  return {
    nombre:producto.nombre,
    precioFinal:Math.round(producto.precio * 1.21) 
  }
})
console.log(preciosConIVA)

//Ejercicio 3 filter andmap

const soloMuebles = productos
   .filter(productos => productos.categoria === "Muebles")
   .map(producto => ({
    nombre: producto.nombre
}))  

console.log(soloMuebles)

//Ejercicio 4

const producto = productos.find(function(producto) {
  return producto.id === 6;
});

console.log(producto.nombre ,"$"+producto.precio);

//Ejercicio 5

const resultado = productos.find(function(producto) {
  return producto.nombre.includes ("Mouse");
});

if (resultado) {
  console.log(`Encontrada: ${resultado.nombre}`)
} else {
  console.log("No encontrado")
}

//Ejercicio 6

//1
const mayor100 = productos.some(function(p) {
  return p.precio > 100;
});

console.log(mayor100); 
//2
const tienenid = productos.every(function(p) {
  return p.id == true;
});

console.log(tienenid); 

//3
const todosActivos = productos.some(function(p) {
  return p.activo === false;
});

console.log(todosActivos); 

//4
const todosstock0 = productos
  .filter(p => p.categoria == "Electrónica" )
  .every(function(p) {
  return p.stock > 0 
});

console.log(todosstock0); 

// Ejercicio 7

const valorTotal = productos
  .filter(p => p.stock > 0)
  .reduce((suma, producto) => {

    return suma + (producto.precio * producto.stock);
  }, 0); 

console.log(valorTotal);