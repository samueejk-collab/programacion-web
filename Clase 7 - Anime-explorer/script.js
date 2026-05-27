
const animes = [
  {
    titulo: "Attack on Titan",
    imagen: "<https://placehold.co/280x400/e94560/ffffff?text=Attack+on+Titan>",
    genero: "Acción",
    rating: 9.0,
    sinopsis: "La humanidad sobrevive dentro de enormes murallas que los protegen de los Titanes."
  },
   {
    titulo: "Attack on Titan",
    imagen: "<https://placehold.co/280x400/e94560/ffffff?text=Attack+on+Titan>",
    genero: "Acción",
    rating: 9.0,
    sinopsis: "La humanidad sobrevive dentro de enormes murallas que los protegen de los Titanes."
  },
];


function crearCard(anime){
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
    <img src = "${anime.imagen}" alt = "${anime.titulo}">
    <div class = "card-info">
     <span class = "genero">${anime.genero}</span>
    </div>
`;
 return card;
}

function renderGrilla(lista){
    const grilla = document.
}