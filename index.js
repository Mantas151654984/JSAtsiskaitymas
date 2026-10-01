
let temperaturos = [];

for (let i = 0; i < 7; i++) {
    let temperatura = Number(prompt("iveskite " + (i + 1) + " savaites temperatura:"));
    temperaturos.push(temperatura);
}

let teigiamos = [];

for (let temperatura of temperaturos) {
    if (temperatura > 0) {
        teigiamos.push(temperatura);
    }
}

teigiamos.sort((a, b) => a - b);

let suma = 0;

for (let temperatura of teigiamos) {
    suma = suma + temperatura;
}

let vidurkis = suma / teigiamos.length;

console.log(teigiamos);
alert("teigiamu temperaturu vidurkis yra: " + vidurkis);
