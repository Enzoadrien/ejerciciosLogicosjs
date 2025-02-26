function contadorPalabras(palabras){
    let contador = 0;
    let arraypalabras = [];
    let palabra = "";
    for(let i = 0; i < palabras.length; i++){
        if(palabras[i] === " "){
            if (palabra.length > 0) { 
                arraypalabras.push(palabra);
                palabra = ""; 
            }
        }else {
            palabra += palabras[i];
        }
    }

    for(let e = 0; e < arraypalabras.length; e++){
        for(let a = 0; a < arraypalabras.length; a++){
            if(arraypalabras[e] === arraypalabras[a]){
                contador++;
            }
        }
    }
}

contadorPalabras("hola adios brinco blanco hola");