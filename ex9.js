let umidade = 45;

if(umidade > 70){
    console.log("O ar está húmido!!" + "a umidade está em " + umidade);
}

if(umidade > 30 && umidade < 70){
    console.log("O ar está seco!!" + "a umidade está em " + umidade);
}

if(!(umidade > 30)){
    console.log("O ar está muito seco!! " + "a umidade está em "+ umidade);
}