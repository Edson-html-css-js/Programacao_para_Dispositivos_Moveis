// Um cliente solicitou a sua consultoria para criar um app, no caso apenas um código em node que indique se a capacidade do seu restaurante já está esgotada.
// O app está sendo criado pois a fiscalização da prefeitura está aplicando multa para os estabelecimentos que ultrapassam a capacidade de lotação.
// Para isto sua aplicação deverá possuir uma variável chamada contadorPessoas que conterá a quantidade de pessoas no estabelecimento naquele instante.
// Também deverá haver uma variável chamada capacidade, contendo a quantidade de pessoas suportadas no estabelecimento.
// O seu app deverá fazer a comparação, do contadorPessoas com a capacidade e mostrará uma das 3 mensagens:
// - Ainda há locais disponíveis para XXX pessoas
// - O estabelecimento está super lotado, com YYY pessoas a mais do que o permitido
// - O estabelecimento está com a capacidade total

var contadorPessoas = 400;
var capacidade = 400;
var res = capacidade - contadorPessoas;
var res2 = contadorPessoas - capacidade;
if(contadorPessoas < capacidade){
    console.log(`Ainda há locais disponíveis para ${res} pessoas!`)
}else if(contadorPessoas > capacidade){
   console.log(`O estabelecimento está super lotado, com ${res2} pessoas a mais do que o permitido`)
}else if(contadorPessoas === capacidade){
    console.log("O estabelecimento está com a capacidade total")
}
