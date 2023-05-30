document.getElementById('btnCalcular').addEventListener('click', function() {
    var precoAnterior = parseFloat(prompt("Digite o preço anterior:"));
    var precoAtual = parseFloat(prompt("Digite o preço atual:"));

    var diferenca = precoAtual - precoAnterior;
    var percentual = (diferenca / precoAnterior) * 100;

    var resultado = "";

    if (diferenca > 0) {
        resultado += "O produto está mais caro.<br>";
        resultado += "O preço subiu R$" + diferenca.toFixed(2) + " em relação ao preço anterior.<br>";
        resultado += "Uma variação de " + percentual.toFixed(2) + "% para cima.";
    } else if (diferenca < 0) {
        resultado += "O produto está mais barato.<br>";
        resultado += "O preço caiu R$" + Math.abs(diferenca).toFixed(2) + " em relação ao preço anterior.<br>";
        resultado += "Uma variação de " + Math.abs(percentual).toFixed(2) + "% para baixo.";
    } else {
        resultado += "O preço não teve variação.";
    }

    document.getElementById('output').innerHTML = resultado;
});
