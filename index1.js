const profilis = {
    vardas: "Mantas",
    amzius: 17,
    miestas: "Kaunas",
    ArMokinasi: true,

    gautiSavybiuPavadinimus: function() {
        return Object.keys(this);
    },

    atnaujinti: function(naujiDuomenys) {
        Object.assign(this, naujiDuomenys);
    }
};
console.log("profilio savybiu pavadinimai:", profilis.gautiSavybiuPavadinimus());
profilis.atnaujinti({ amzius: 18, miestas: "Kaunas", profesija: "Programuotojas" });

console.log("atnaujintas profilis:", profilis);