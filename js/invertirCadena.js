function invirtiendoCadena(cadena){
    let cadenaNueva = "";
    console.log(cadena.length);
    for(let i = cadena.length - 1; i >= 0; i--){
        cadenaNueva +=  cadena[i];
    }
    return cadenaNueva;
}

let valorCadena = invirtiendoCadena("hola");
console.log(valorCadena);