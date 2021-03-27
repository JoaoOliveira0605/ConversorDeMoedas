var valorEmDolarTexto = prompt ("Qual valor em dolar você quer converter?")

var valorEmDolarNumero = parseFloat(valorEmDolarTexto)

var valorEmReal = valorEmDolarNumero * 5.69

var valorEmRealDecimal = valorEmReal.toFixed(2)

document.write ("<h2>" + valorEmDolarNumero + " U$ = " +valorEmRealDecimal + " R$" + "</h2>")
 
