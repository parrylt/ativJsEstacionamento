// var carro = prompt ("Qual o carro?");
// var marca = prompt ("Qual a marca?");
// var codigo = prompt ("Digite o código promocional se tiver um");
// var tempo = parseInt (prompt("Quantas horas ficou no estacionamento?"));
// var promo1 = (tempo*10)/10;
// var promo2 = (tempo*10)/20;
// var preco1 = (tempo*10) - promo1;
// var preco2 = (tempo*10) - promo2;

// document.write("O carro é " + carro + " e é da marca " + marca + ". O carro permaneceu " + tempo + " horas no estacionamento.")

// if (codigo == "2YBH") {
//     document.write ("Você digitou o código promocional 2YBH. Este código é válido. O preço do estacionamento seria " + tempo*10 + " reais. Com este código promocional, o preço a ser pago será de " + preco1 + " reais. Será um desconto de 10%.");
// }

// else if (codigo == "2B33") {
//     document.write ("Você digitou o código promocional 2B33. Este código é válido. O preço do estacionamento seria " + tempo*10 + " reais. Com este código promocional, o preço a ser pago será de " + preco2 + " reais. Será um desconto de 20%.");
// }
// else {
//     document.write ("Nenhum código promocional inserido. O preço a ser pago é de " + tempo*10 + " reais.");}

var carro = prompt ("Qual é o carro?");
var marca = prompt ("Qual é a marca?");
var qtdHoras = prompt ("Quanto tempo ficou?");
var valor = 10;
var total = (qtdHoras*valor);
var cod = prompt ("Qual o código da promoção?");
var A2ybh = 0.1;
var B2b33 = 0.2;
if(cod == A2ybh)
{
    var totalDesc = total - (total*A2ybh);
    document.write("Seu carro é um " + carro + " da marca " + marca + " e ficou por " + qtdHoras + " horas. O valor é de R$" + total + " reais mas com o código da promoçao 2ybh fica " + totalDesc);
}
else if (cod == B2b33)
{
    var totalDesc = total - (total*B2b33);
    document.write("Seu carro é um " + carro + " da marca " + marca + " e ficou por " + qtdHoras + " horas. O valor é de R$" + total + " reais mas com o código da promoçao 2b33 fica " + totalDesc);
}
else
{
    document.write("Desconto nao encontrado! Seu carro é um " + carro + " da marca " + marca + " e ficou por " + qtdHoras + " horas. O valor é de R$" + total + ".");
}