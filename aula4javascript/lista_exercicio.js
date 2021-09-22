let listaCompras =["cafe", "feijão", "açucar", "milho", "ovo", "agua"];
listaCompras[6] = "queijo";


listaCompras.push("Nutella"); // add no final do array

listaCompras.splice(2, 0, "hamburguer", "pinga"); //add na posição do array que vc quiser
//console.log(listaCompras);

console.log("lista de conpras ==>", listaCompras);
console.log(listaCompras[3]);

