const formulario = document.getElementById("formulario");
const camposDeEntrada = document.querySelectorAll("input, textarea");

formulario.addEventListener("submit", function(event) {
    event.preventDefault(); // impede o envio automático
})

let invalido = false;

camposDeEntrada.forEach(campo => {
    if (campo.value.trim() === "") {
        campo.classList.add(invalido);
        
        invalido = true;
    }
})