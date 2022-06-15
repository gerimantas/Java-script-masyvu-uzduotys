window.onload = function() {
    const testas = [10,20,25,26,27,1500];
    // console.log(testas);

    isvedaMasyva(testas);

    let suma = masyvoSuma(testas);
    console.log("Testinio masyvo suma = " +suma);
} 

function isvedaMasyva(masyvas) {
    for (let i = 0; i < masyvas.length; i++) {
        console.log(masyvas[i]);
    }
}

function masyvoSuma(masyvas) {
    let suma = 0;
    for (let i = 0; i < masyvas.length; i++) {
    }
    return suma;
}