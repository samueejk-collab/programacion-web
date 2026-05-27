
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const mensaje = document.getElementById("mensaje");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // evita recargar la página

    
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mascota = document.getElementById("mascota").value;
    const especie = document.getElementById("especie").value;
    const consulta = document.querySelector("input[name='consulta']:checked");
    const horario = document.getElementById("horario").value;
    const comentarios = document.getElementById("comentarios").value;

    
    if (!nombre || !email) {
      mensaje.textContent = "Por favor, completá nombre y email.";
      mensaje.style.color = "red";
      return;
    }


    let resumen = `✅ Pedido recibido:\n
    Cliente: ${nombre} (${email})
    Mascota: ${mascota} (${especie})
    Consulta: ${consulta ? consulta.parentElement.textContent.trim() : "No seleccionada"}
    Horario: ${horario}
    Comentarios: ${comentarios || "Ninguno"}`;

    mensaje.textContent = resumen;
    mensaje.style.color = "green";
  });
});
