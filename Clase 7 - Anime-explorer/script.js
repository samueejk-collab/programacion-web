
const peliculas = [
  {
    titulo: "Dead Poets Society",
    imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FuGa3NexFBtk12KT9vAoweVmN4k6.jpg&f=1&nofb=1&ipt=ca07b2ff892c5ce4faf62bd8f6d3f390bfb402d34f3fcae238fe68ea2b4684f6",
    genero: "Drama",
    rating: 9.0,
    sinopsis: ""
  },
  {
    titulo: "Pulp Fiction",
    imagen: "https://m.media-amazon.com/images/M/MV5BYTViYTE3ZGQtNDBlMC00ZTAyLTkyODMtZGRiZDg0MjA2YThkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    genero: "Acción",
    rating: 9.0,
    sinopsis: ""
  },
  {
    titulo: "Perfect Days",
    imagen: "https://m.media-amazon.com/images/M/MV5BNDdjNDBmM2EtMWVhNS00NTJjLWI2MmQtOTczZWNkOTdhNGIwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    genero: "Acción",
    rating: 9.0,
    sinopsis: ""
  },
  {
    titulo: "Project Hail Mary ",
    imagen: "https://multiplex.com.ar/wp-content/uploads/proyecto-fin-del-mundo.jpg",
    genero: "Acción",
    rating: 9.0,
    sinopsis: ""
  },
  {
    titulo: "Look Back ",
    imagen: "https://image.tmdb.org/t/p/original/1QJBTdtyH5aLrhjR3VbuxXNNnzH.jpg",
    genero: "Acción",
    rating: 9.0,
    sinopsis: ""
  },
  {
    titulo: "Jujutsu Kaisen",
    imagen: "https://m.media-amazon.com/images/I/818YClHyUjL._AC_UF894,1000_QL80_.jpg",
    genero: "Acción",
    rating: 9.0,
    sinopsis: ""
  },
   {
    titulo: "Life is Beautiful",
    imagen: "https://m.media-amazon.com/images/M/MV5BZTBhOGYzZjQtYzE0Mi00MGIwLWE0MWYtNzMxNTM2OTFkM2NjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    genero: "Acción",
    rating: 9.0,
    sinopsis: ""
  },
  {
    titulo: "Aftersun",
    imagen: "https://a.ltrbxd.com/resized/film-poster/8/6/8/5/5/8/868558-aftersun-0-1000-0-1500-crop.jpg?v=5ce2118fca",
    genero: "Acción",
    rating: 9.0,
    sinopsis: ""
  },
  
];


function crearCard(pelicula){
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
    <img src = "${pelicula.imagen}" alt = "${pelicula.titulo}">
    <div class = "card-info">
     <span class = "genero">${pelicula.genero}</span>
     <h2>${pelicula.titulo}</h2>
     <p>${pelicula.sinopsis}</p>
     <span class = "rating"> ★ ${pelicula.rating}</span>
    </div>
`;
 return card;
}

function renderGrilla(lista){
  const grilla = document.querySelector("#grilla");
  const contador = document.querySelector("#contador");

  grilla.innerHTML = "";

  lista.forEach(function(pelicula){
    const card = crearCard(pelicula);
    grilla.appendChild(card);
  });

  contador.textContent = lista.length + " peliculas encontradas"
}

function buscar(lista, termino) {
  return lista.filter(function(pelicula) {
    return pelicula.titulo.toLowerCase().includes(termino.toLowerCase());
  });
}
//filtrar por genero 
function filtrarPorGenero(lista, genero) {
  if (genero === "") return lista;

  return lista.filter(function(pelicula) {
    return pelicula.genero === genero;
  });
}
//buscar y filtrar

function buscarYFiltrar() {
  const termino = document.querySelector("#busqueda").value;
  const genero = document.querySelector("#genero").value;

  let resultado = buscar(peliculas, termino);
  resultado = filtrarPorGenero(resultado, genero);

  renderGrilla(resultado);
}

document.querySelector("#busqueda").addEventListener("input", buscarYFiltrar);
document.querySelector("#genero").addEventListener("change", buscarYFiltrar);

renderGrilla(peliculas);

