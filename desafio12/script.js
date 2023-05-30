const btnCalcular = document.getElementById('btnCalcular');
const resultado = document.getElementById('resultado');

btnCalcular.addEventListener('click', function() {
  const nome = prompt('Digite o nome do aluno:');
  const nota1 = parseFloat(prompt('Digite a primeira nota do aluno:'));
  const nota2 = parseFloat(prompt('Digite a segunda nota do aluno:'));

  const media = (nota1 + nota2) / 2;

  let situacao;
  if (media < 3) {
    situacao = 'Reprovado';
  } else if (media < 6) {
    situacao = 'Recuperação';
  } else {
    situacao = 'Aprovado';
  }

  resultado.innerHTML = `
    <table>
      <tr>
        <th>Nome</th>
        <th>Nota 1</th>
        <th>Nota 2</th>
        <th>Média</th>
        <th>Situação</th>
      </tr>
      <tr>
        <td>${nome}</td>
        <td>${nota1}</td>
        <td>${nota2}</td>
        <td>${media.toFixed(2)}</td>
        <td>${situacao}</td>
      </tr>
    </table>
  `;

  resultado.style.display = 'block';
});
