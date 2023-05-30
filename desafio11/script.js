document.getElementById('btnCalcular').addEventListener('click', function() {
    var nomeFuncionario = prompt("Digite o nome do funcionário:");
    var salarioAtual = parseFloat(prompt("Digite o salário atual do funcionário:"));
    var porcentagem = parseFloat(prompt("Digite a porcentagem de reajuste salarial:"));

    var aumento = salarioAtual * (porcentagem / 100);
    var novoSalario = salarioAtual + aumento;

    var resultado = "Nome do funcionário: " + nomeFuncionario + "<br>";
    resultado += "Salário atual: R$" + salarioAtual.toFixed(2) + "<br>";
    resultado += "Porcentagem de reajuste: " + porcentagem.toFixed(2) + "%<br>";
    resultado += "Aumento salarial: R$" + aumento.toFixed(2) + "<br>";
    resultado += "Novo salário: R$" + novoSalario.toFixed(2);

    document.getElementById('output').innerHTML = resultado;
});
