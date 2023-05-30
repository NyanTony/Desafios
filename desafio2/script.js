function verificarNumeroAntecessorSucessor() {
    var numero = parseInt(prompt("Digite um número:"));
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    if (isNaN(numero)) {
        resultado.innerHTML = "Número inválido!";
        resultado.classList.remove("verde", "vermelho");
        return;
    }

    var antecessor = numero - 1;
    var sucessor = numero + 1;

    resultado.innerHTML = `O antecessor de ${numero} é ${antecessor} e o sucessor é ${sucessor}.`;

    if (numero % 2 === 0) {
        resultado.classList.add("verde");
        document.body.classList.remove("changeColorRed");
        document.body.classList.add("changeColorGreen");
    } else {
        resultado.classList.add("vermelho");
        document.body.classList.remove("changeColorGreen");
        document.body.classList.add("changeColorRed");
    }
}

window.addEventListener("DOMContentLoaded", function () {
    var botao = document.getElementById("verificar-botao");
    botao.addEventListener("click", verificarNumeroAntecessorSucessor);
});
