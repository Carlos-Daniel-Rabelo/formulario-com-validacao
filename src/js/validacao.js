const formulario = document.getElementById("formulario");
const camposDeEntrada = document.querySelectorAll("input, textarea");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    
    camposDeEntrada.forEach(campo => {
        if (campo.value.trim() === "") {
            console.log("o campo ta vazio");
        }
    });
});
