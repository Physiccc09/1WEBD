console.log("Hello Nigger!")

 //Calcule du prix
const prix = parseFloat(prompt("Quel est le prix choisie?"));
const TVA = parseFloat(prompt("Quel est la TVA (%) ?"));
const article = parseInt(prompt("Combien d'article achetez-vous ?"));
function calculerPrix(prix, TVA, article) {
    const prixHT = prix * article;
    const montantTVA = prixHT * (TVA / 100);
    const prixTotal = prixHT + montantTVA;
    return prixTotal;
}
const resultat = calculerPrix(prix, TVA, article);
console.log(`${resultat} €`);


// Échange de valeur avec variable temp
let x = parseFloat(prompt("Quel est la première valeur (x) ?"));
let y = parseFloat(prompt("Quel est la deuxième valeur (y) ?"));
let z = parseFloat(prompt("Quel est la troisième valeur (z) ?"));

let temp = x;
x = y;
y = z;
z = temp;

console.log(`${x} €`);
console.log(`${y} €`);
console.log(`${z} €`);




// Échange de valeur avec affectation multiple
let a = parseFloat(prompt("Quelle est la première valeur (x) ?"));
let b = parseFloat(prompt("Quelle est la deuxième valeur (y) ?"));
let c = parseFloat(prompt("Quelle est la troisième valeur (z) ?"));

[a, b, c] = [b, c, a];

console.log(`${a} €`);
console.log(`${b} €`);
console.log(`${c} €`);


// Échange de valeur avec operations
let h = parseFloat(prompt("Quelle est la première valeur (x) ?"));
let u = parseFloat(prompt("Quelle est la deuxième valeur (y) ?"));
let r = parseFloat(prompt("Quelle est la troisième valeur (z) ?"));

h = h + u;
u = h - u;
h = h - u;

u = u + r;
r = u - r;
u = u - r;



console.log(`${h} €`);
console.log(`${u} €`);
console.log(`${r} €`);
