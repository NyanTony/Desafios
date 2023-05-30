const converterBotao = document.getElementById('converter-botao');
const resultadoDiv = document.getElementById('resultado');

converterBotao.addEventListener('click', converterTemperatura);

function converterTemperatura() {
    const temperaturaCelsius = parseFloat(prompt('Digite a temperatura em graus Celsius (°C):'));

    const temperaturaKelvin = temperaturaCelsius + 273.15;
    const temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;

    resultadoDiv.innerHTML = `Temperatura em Kelvin (°K): ${temperaturaKelvin.toFixed(2)}<br>
                               Temperatura em Fahrenheit (°F): ${temperaturaFahrenheit.toFixed(2)}`;
}
