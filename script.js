function Converter() { // Converter que pegou do button do onClick
    var valorElemento = document.getElementById("valor") // pegou do id do html do input
    var valor = valorElemento.value; // value vc pega o que tem la dentro dele que é o valor
    var valorEmDolarNumerico = parseFloat(valor) // converte string em numero decimal
    

    var valorEmReal = valorEmDolarNumerico * 5
    console.log(valorEmReal);

    var elementoValorConvertido = document.getElementById("valorConvertido")
    var valorConvertido = " O resultado em real é R$ " + valorEmReal // frase que o usuario vai ver
    elementoValorConvertido.innerHTML = valorConvertido // insirir no html
}
