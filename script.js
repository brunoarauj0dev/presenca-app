const botao = document.querySelector("button");

const input = document.querySelector("input");

const lista = document.querySelector("#lista");

const contador = document.querySelector("#contador");

function atualizarContador() {
    contador.textContent = "Presentes: " + lista.children.length;
}

botao.addEventListener("click", function() {

    console.log(input.value);
    if (input.value === "") {
        return;
    }
    const item = document.createElement("li");
    const botaoremover = document.createElement("button");
        botaoremover.classList.add("remover");
    botaoremover.textContent = "Remover";
        botaoremover.addEventListener("click", function() {
            item.remove();
            atualizarContador();
        });
    item.textContent = input.value;
        item.appendChild(botaoremover);
    lista.appendChild(item);
        atualizarContador();
    input.value = "";

});

input.addEventListener("keydown", function(event) {

});