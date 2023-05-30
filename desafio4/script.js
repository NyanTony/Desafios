window.addEventListener("DOMContentLoaded", function () {
    var solicitarNomeBtn = document.getElementById("solicitar-nome");
    
    solicitarNomeBtn.addEventListener("click", function () {
      var nome = prompt("Digite seu nome:");
      
      if (nome) {
        var idade = prompt("Digite sua idade:");
        
        if (idade) {
          alert(`Acabei de conhecer ${nome}, que tem ${idade} anos. Seja bem-vindo!`);
        } else {
          alert("Idade inválida!");
        }
      } else {
        alert("Nome inválido!");
      }
    });
  });
  