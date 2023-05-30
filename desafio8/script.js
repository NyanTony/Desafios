document.getElementById("btn-calcular").addEventListener("click", function () {
    var produto = prompt("Qual é o produto que está sendo comprado?");
    var preco = parseFloat(prompt("Qual é o preço do produto?"));

    var desconto = preco * 0.1;
    var precoComDesconto = preco - desconto;

    var resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "Produto: " + produto + "<br>" +
        "Preço original: R$" + preco.toFixed(2) + "<br>" +
        "Desconto (10%): R$" + desconto.toFixed(2) + "<br>" +
        "Preço com desconto: R$" + precoComDesconto.toFixed(2);
});
