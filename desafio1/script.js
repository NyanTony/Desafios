function verificarAnoBissexto() {
    var ano = parseInt(prompt("Digite um ano:"));
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    if (isNaN(ano)) {
        resultado.innerHTML = "Ano inválido!";
        resultado.classList.remove("verde", "vermelho");
        return;
    }

    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
        resultado.innerHTML = `O ano ${ano} é bissexto! &#128522;`;
        resultado.classList.add("verde");
        document.body.classList.remove("changeColorRed");
        document.body.classList.add("changeColorGreen");
    } else {
        resultado.innerHTML = `O ano ${ano} não é bissexto! &#128542;`;
        resultado.classList.add("vermelho");
        document.body.classList.remove("changeColorGreen");
        document.body.classList.add("changeColorRed");
    }
}

window.addEventListener("DOMContentLoaded", function () {
    var botao = document.getElementById("verificar-botao");
    botao.addEventListener("click", verificarAnoBissexto);
});
