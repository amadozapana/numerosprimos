var NumeroPri;

NumeroPri = prompt('ingrese el numero', '');

let numeroPrimo = NumeroPri;
let = esNumeroPrimo = true;

if(numeroPrimo == 1 || numeroPrimo == 0){
    esNumeroPrimo = false;

    } else{

    for(i=2; i<numeroPrimo;i++){

    if (numeroPrimo % i === 0 ){
        esNumeroPrimo = false;
        }
    }

}

if (esNumeroPrimo === true) {
    document.write("Hola el numero ");
    document.write(numeroPrimo);
    document.write(" si es numero primo");
} else {
    document.write("Hola el numero ");
    document.write(numeroPrimo);
    document.write(" no es numero primo");
}

/*if(esPrimo){
console.log(numeroPrimo + " es primo");

}else{console.log(numeroPrimo + " no es primo");}*/