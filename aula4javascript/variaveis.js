

/*let livro = {
    titulo: "senhor dos aneis",
    autor: "tolkin"
};

if ('autor' in livro) {
    console.log("tem o atributo neste livro");
}else {
    console.log("não tem este atributo")
}

console.log(livro.autor);  */

//----------------------------------------------

//const db = DBConnection.create(); // é uma conexão de banco de dados, é um exenplo de 'const'
//onstante que não muda!



if ('autor') {
    let x = 10; // é uma vaiavel local, só é executada dentro do bloco
    //console.log(x);
    console.log(x,"LET  é uma vaiavel local, só é executada dentro do bloco!");
}else {
    console.log("não tem este atributo")
}


if ('autor') {
    const a = 20; // é uma vaiavel local, só é executada dentro do bloco
    //console.log(a);
    console.log(a,"CONST é uma vaiavel local, só é executada dentro do bloco!");
}else {
    console.log("não tem este atributo")
}

var b = 30;
 console.log(b,"VAR é uma vaiavel global, é executada dentro do bloco e pode ser chamada tamben fora do bloco!");