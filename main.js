/*
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


const fruits  = ["pomme", "banane", "orange"];

fruits .push("mangue");
fruits [1] = "fraise";
console.log(fruits)

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

fruits.forEach(e => {
        console.log(e)
});



let nums = [3,5,7,9,11];
nums = nums.map(e => e *2 );


let bigNums = [];
for (let i = 0; i < nums.length; i++) {
    bigNums.push(nums[i]);
}


let sumNums = 0;
for (let i = 0; i < nums.length; i++) {
    sumNums += nums[i];
}

let sumBigNums = 0;
for (let i = 0; i < bigNums.length; i++) {
    sumBigNums += bigNums[i];
}

console.log("nums :", nums);
console.log("bigNums :", bigNums);
console.log("somme nums :", sumNums);
console.log("somme bigNums :", sumBigNums);



let students = [
                {nom: "Jean", age: 20, note: 15},
                {nom: "Rachid", age: 20, note: 12},
                {nom: "Couscous", age: 20, note: 8}
                ];

let noms = [];
let notes = [];

for (let i = 0; i < students.length; i++) {
    noms.push(students[i].nom);
    notes.push(students[i].note);
}

console.log(noms)
console.log(notes)

let studentsBon = students.filter(e => e.note > 12);
console.log(studentsBon);


const supinfoModule = {
    nom : "1WEBP",
    professeur: "Mme Martin",
    students : students,

    addStudent : function() {
        const nom = prompt("Nom de l'étudiant ?");
        const age = parseInt(prompt("Âge de l'étudiant ?"));
        const note = parseFloat(prompt("Note de l'étudiant ?"));
        this.students.push({nom,age,note});
        console.log("Etudiant ajouté !");
        console.log(this.students)
        },
    afficherMoyenne : function(){
            let somme = 0;
            for (let i = 0; i < this.students.length; i++) {
                somme = somme + this.students[i].note;
            }
            let moyenne = somme / this.students.length;
            console.log(`La moyenne de la classe est de ${Math.floor(moyenne)} !`);
        }
}

supinfoModule.afficherMoyenne();
supinfoModule.addStudent();


class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduction() {
    return `Hi, my name is ${this.name} and I'm ${this.age}`;
  }
}


const person1 = new Person("Hitler", 3945);
console.log(person1.introduction());





class Animal {
    constructor(name = '') {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }
    makeSound() {
        console.log("Son de l'animal");
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("bark!");
    }
}

const myDog = new Dog();
myDog.makeSound(); 
myDog.name = "Fait toi manger la queue par un chien enrager espece de fdp de merde, benne a foutre, sac a fourrage";
console.log(myDog.name);




class Shape {
    constructor(name = '') {
        this._name = name;
    }
    getSurface() {
        throw new Error("jsp mon frere");
    }
}

class Circle extends Shape {
    constructor(r) {
        super("Circle");
        this.r = r;
    }
    getSurface() {
        return Math.PI * this.r ** 2;
    }
}

class Square extends Shape {
    constructor(l) {
        super("Square");
        this.l = l;
    }
    getSurface() {
        return this.l * this.l;
    }
}

const c = new Circle(895);
console.log("Surface du cercle :", Math.floor(c.getSurface()));

const s = new Square(78524);
console.log("Surface du carré :", Math.floor(s.getSurface()));
*/

