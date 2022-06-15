window.onload = function() {
    const testas = [10,20,30,40,50,60];
    // console.log(testas);

    isvedaMasyva(testas);

    let suma = masyvoSuma(testas);
    console.log("Testinio masyvo suma = " +suma);

    
    let vid = masyvoVidurkis(testas);
    console.log("Testinio masyvo vidurkis = " +vid);
    
} 



function isvedaMasyva(masyvas) {
    for (let i = 0; i < masyvas.length; i++) {
        console.log(masyvas[i]);
    }
}

function masyvoSuma(masyvas) {
    let suma = 0;
    for (let i = 0; i < masyvas.length; i++) {
        suma += masyvas[i];
    }
    return suma;
}

function masyvoVidurkis(masyvas) {
    let vidurkis = masyvoSuma(masyvas)/masyvas.length; 
    return vidurkis;
    
}