const formulario = document.querySelector(".formulario");
const inputs = document.querySelectorAll(".input");
const camposObrigatorio = document.querySelectorAll(".campo-obrigatorio");

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    // adicione sua lógica de tratamento de formulário aqui
    inputs.forEach((input, index) => {
        // obtive o valor de cada input individualmente
        console.log(input.value)
        console.log(index)

        // verificar se os inputs estão com algum valor 
        if (input.value.trim() === "") {
            // input esta sem nenhum conteúdo
            input.classList.add('invalido')
            camposObrigatorio[index].classList.remove('campo-obrigatorio')
        }
        // para o else fazer o caminho contrario
    })
});