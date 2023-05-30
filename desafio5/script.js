function converterDistancia() {
    var distancia = parseFloat(prompt("Digite a distância em metros (m):"));
    var output = document.getElementById("output");
    output.innerHTML = "";
  
    if (isNaN(distancia)) {
      output.innerHTML = "Distância inválida!";
      output.style.color = "red";
      return;
    }
  
    var unidades = ["Km", "Hm", "Dam", "dm", "cm", "mm"];
  
    for (var i = 0; i < unidades.length; i++) {
      var unidade = unidades[i];
      var valorConvertido = distancia / Math.pow(10, i * 3);
      var linha = `<p>${valorConvertido.toFixed(2)} ${unidade}</p>`;
      output.innerHTML += linha;
    }
  
    output.style.color = "black";
  }
  
  window.addEventListener("DOMContentLoaded", function () {
    var botao = document.getElementById("converter-botao");
    botao.addEventListener("click", converterDistancia);
  });
  