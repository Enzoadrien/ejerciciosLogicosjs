let arreglo = [];
let binario = ''; 
let resultadoBinario = '';

function decimalBinario(decimal){
    let numeroEntero = Math.trunc(decimal);
    if(numeroEntero > 0){
        arreglo.push(numeroEntero);
        numeroEntero = Math.floor(numeroEntero / 2);
        decimalBinario(numeroEntero);
        
    }else{
        for(let i =0; i < arreglo.length; i++){
            if((arreglo[i] % 2) == 1 ){
                binario += '1';
            }else{
                binario += '0';
            }
        }
        for(let e = binario.length - 1; e >= 0; e--){
            resultadoBinario += binario[e];
        }

    }
    return resultadoBinario;
}


let resultado = decimalBinario(129);
console.log(resultado);