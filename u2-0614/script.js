window.onload = function() {
    let testas = [3,5,2,1,2,2,3];
    console.log(testas);

    console.log("Masyvo sandauga = " +masyvoSandauga(testas))
}

function masyvoSandauga(masyvas) {
    let sandauga = 1;
    for (let i = 0; i < masyvas.length; i++) {
        sandauga *= masyvas[i];
    }
    return sandauga;
}