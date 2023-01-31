var valorEmEuro = 30;
var cotacaoEuro = 5.55;
var cotacaoBitcoin = 21028.39;
var nome = "Victor"


var valorEmReal = valorEmEuro * cotacaoEuro
valorEmReal = valorEmReal.toFixed(2);
alert("Olá "+ nome + ", sua conversao de "+ valorEmEuro + " Euros ficou " +  "R$ "+ valorEmReal)

var valorEmBitcoin = valorEmEuro * cotacaoBitcoin;
valorEmBitcoin = valorEmBitcoin.toFixed(2);
alert(nome + " sua conversao de " + valorEmEuro + " Euros ficou "+ "₿ " + valorEmBitcoin )