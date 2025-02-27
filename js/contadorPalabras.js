function contadorPalabras(palabras){
    let arraypalabras = [];
    let palabra = "";
    let contadorPalabras = new Map(); // Mapa para contar las palabras
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
    if (palabra.length > 0) { 
        arraypalabras.push(palabra); 
    }

    for (let palabra of arraypalabras) {
        if (contadorPalabras.has(palabra)) {
            contadorPalabras.set(palabra, contadorPalabras.get(palabra) + 1);
        } else {
            contadorPalabras.set(palabra, 1);
        }
    }

    contadorPalabras.forEach((conteo, palabra) => {
        console.log(`${palabra}: ${conteo}`);
    });
}


contadorPalabras("hola adios hola brinco blanco hola blanco blanco ");