function calculandoAreaRetangulo(altura, largura){


    area = altura * largura;
    console.log('Area==> ', area);
    return area;//colocando o return e pasando o que vc quer que retorne
    //ele retorna para a variavel a esquerda da função 
}


console.log('Area da caixa de movos==>')
let ovos =  calculandoAreaRetangulo(4, 3)

console.log('retono==>', ovos );

console.log('Então em 3 caixas de ovos teremos ==>');
console.log(ovos * 3);