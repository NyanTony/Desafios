window.addEventListener('DOMContentLoaded', function() {
    var cotacaoDolar = prompt("Informe a cotação do dólar do dia atual:");
    var calcularBotao = document.getElementById('calcular-botao');
    var resultadoDiv = document.getElementById('resultado');

    calcularBotao.addEventListener('click', function() {
        var valorCarteira = prompt("Quantos R$ você tem na carteira?");
        var valorDolar = parseFloat(valorCarteira) / parseFloat(cotacaoDolar);

        resultadoDiv.innerHTML = "Com R$" + valorCarteira + " você pode comprar US$" + valorDolar.toFixed(2);
    });
});
