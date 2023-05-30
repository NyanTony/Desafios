function calcularDelta() {
    var a = parseFloat(prompt("Digite o valor de a:"));
    var b = parseFloat(prompt("Digite o valor de b:"));
    var c = parseFloat(prompt("Digite o valor de c:"));

    var delta = Math.pow(b, 2) - 4 * a * c;

    var saida = document.getElementById("saida");

    if (isNaN(delta)) {
        saida.innerHTML = "Valores inválidos!";
    } else {
        saida.innerHTML = "O valor de Δ é: " + delta;
    }
}

window.addEventListener("DOMContentLoaded", function () {
    var botao = document.getElementById("calcular-botao");
    botao.addEventListener("click", calcularDelta);
});
