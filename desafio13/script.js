const btnCalcular = document.getElementById('btnCalcular');
const resultado = document.getElementById('resultado');

btnCalcular.addEventListener('click', function() {
  const nomeProduto = prompt('Digite o nome do produto:');
  const precoProduto = parseFloat(prompt('Digite o preço do produto:'));
  const valorPago = parseFloat(prompt('Digite o valor pago pelo cliente:'));

  const troco = valorPago - precoProduto;

  resultado.innerHTML = `
    <p>Produto: ${nomeProduto}</p>
    <p>Preço do Produto: R$ ${precoProduto.toFixed(2)}</p>
    <p>Valor Pago: R$ ${valorPago.toFixed(2)}</p>
    <p>Troco: R$ ${troco.toFixed(2)}</p>
  `;

  resultado.style.display = 'block';
});
