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
// Bouton pour changer le mode clair/sombre

const dark = document.getElementById("DarkLightMode");

dark.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    dark.classList.toggle("dark-mode");
});const images = [
    'https://opallotus.com/wp-content/uploads/2025/06/beautiful-photo-sea-waves-684x1024.jpg',
    'https://static.wixstatic.com/media/8431f6_7144202aba4c47e6aaf1074db31c8c23~mv2.webp',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
    'https://images.unsplash.com/photo-1529156069898-49953e39b3ac',
    'https://images.unsplash.com/photo-1547658719-da2b51169607',
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
    'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
    'https://images.unsplash.com/photo-1483721310020-03333e577078',
    'https://images.unsplash.com/photo-1504711434969-e33886168f5c'
];

const galerie = document.querySelector('.imageCtn');
const loader = document.querySelector('.loader');

let index = 0;
let draggedElement = null;

function dragdrop(img) {
    img.setAttribute("draggable", "true"); 

    img.addEventListener('dragstart', () => {
        draggedElement = img;
    });

    img.addEventListener('dragover', (e) => e.preventDefault());

    img.addEventListener('drop', (e) => {
        e.preventDefault();
        if (draggedElement && draggedElement !== img) { 
            galerie.insertBefore(draggedElement, img);
        }
    });
}

function chargerImages(n) {
    galerie.appendChild(loader);
    loader.style.display = 'block';
    setTimeout(() => {
        for (let i = 0; i < n; i++) {
            const img = document.createElement('img');
            img.src = images[index];
            dragdrop(img);
            galerie.appendChild(img);
            index++;
            if (index >= images.length) index = 0;
        }
        loader.style.display = 'none';
    }, 200);
}

setTimeout(() => chargerImages(24), 900); 

window.addEventListener('scroll', () => {
    const position = window.innerHeight + window.scrollY;
    const limite = document.body.offsetHeight;

    if (position >= limite) {
        setTimeout(() => chargerImages(12), 900);
    }
});

const img = document.querySelector('#DarkLightMode');

function moveRandomly() {
    const randomX = Math.floor(Math.random() * (window.innerWidth - 40));
    const randomY = Math.floor(Math.random() * (window.innerHeight - 40));
    img.style.left = `${randomX}px`;
    img.style.top = `${randomY}px`;
    setTimeout(moveRandomly, 1500);
}

moveRandomly();
