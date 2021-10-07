
// function calcularAreaCirculo(raio) {
//     let area = Math.PI * Math.pow(raio, 2)

//     return area;
// }



//                                  arrow  function
const calcularAreaCirculo =  (raio)  => {

    let area = Math.PI * Math.pow(raio, 2);

    return area;

}




let area1 = calcularAreaCirculo(4);
console.log  ('Area do raio 4 ==> ', area1 );

let area2 = calcularAreaCirculo(8);
console.log("Area do raio 8 ==> ", area2);



