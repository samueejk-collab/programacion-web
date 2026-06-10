
const peliculas = [
  {
    titulo: "Dead Poets Society",
    imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FuGa3NexFBtk12KT9vAoweVmN4k6.jpg&f=1&nofb=1&ipt=ca07b2ff892c5ce4faf62bd8f6d3f390bfb402d34f3fcae238fe68ea2b4684f6",
    genero: "Tragedia",
    rating: 9.0,
    sinopsis: "se mueren todos"
  },
   {
    titulo: "Pulp Fiction",
    imagen: "https://placehold.co/280x400/e94560/ffffff?text=Attack+on+Titan",
    genero: "Acción",
    rating: 9.0,
    sinopsis: "lorem impsum"
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

document.querySelector("#grilla").innerHTML = html;