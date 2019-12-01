let nekiNiz = [1, 2, 3, 4, "mika", "zika"];

let zaSvaki = function (niz, akcija) {
    for (let x of niz)
        akcija(x);
}

console.log("---");
let prikazNaKonzolu = function (x) {
    console.log(x);
};
zaSvaki(nekiNiz, prikazNaKonzolu);

console.log("---");
let prikazNaKonzolu2 = x => console.log(x);
zaSvaki(nekiNiz, prikazNaKonzolu2);

console.log("---");
zaSvaki(nekiNiz, function (x) {
    console.log(x)
});

console.log("---");
zaSvaki(nekiNiz, x => console.log(x));

console.log("---");
zaSvaki(nekiNiz, console.log);
