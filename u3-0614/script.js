window.onload = function() {
    let tMasyvas = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    console.log(tMasyvas);

    console.log("Kas antras masyvo skaicius: "+kasAntras(tMasyvas));
}



function kasAntras(tMasyvas) {
    const masyvasA = [];
    for (let i = 2; i <= tMasyvas.length; i += 2) {
        masyvasA.push(i);
    }
    return masyvasA;
}