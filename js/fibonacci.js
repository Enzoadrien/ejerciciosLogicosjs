function fibonacci(){
    let datoUno = 0, datoDos = 1, suma = 0;
    for(let i= 0; i < 50; i++){
        console.log(`${datoUno}`);
        suma = datoUno + datoDos;
        datoUno = datoDos;
        datoDos = suma;
    }
}

fibonacci();