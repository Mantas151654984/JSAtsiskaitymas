let temperaturos = [12, -3, 8, 15, -1, 10, 6];

let teigiamos = temperaturos.filter(temp => temp > 0);

teigiamos.sort((a, b) => a - b);

let suma = teigiamos.reduce((sum, temp) => sum + temp, 0);
let vidurkis = suma / teigiamos.length;

console.log(teigiamos);
console.log(vidurkis);
