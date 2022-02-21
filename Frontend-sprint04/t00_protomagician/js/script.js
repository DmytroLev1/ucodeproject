let properties = document.querySelector('#properties')
let magician_element = document.querySelector('.magician')
let head = document.querySelector('#head')
let protoBtn = document.querySelectorAll('.protoBtn')




let createText = (elem) => {
    let hello = `<button id="sayHello">do magic</button><br>
    <button id="sayHello">Say Hello</button>
    <div class="descriptionHeroes">
    </div>`
    properties.innerHTML = ''
    properties.insertAdjacentHTML('afterbegin', hello);

    let sayHello = document.querySelectorAll('#sayHello')
    sayHello.forEach(elem => elem.addEventListener('click', sayhello))
    

    let ok = document.querySelector(".descriptionHeroes");
    if(elem.name)
        ok.insertAdjacentHTML('beforeend', `<span>name: <span class="propValue"> ${elem.name}</span></span><br>`)
    if (elem.age)
        ok.insertAdjacentHTML('beforeend', `<span>age: <span class="propValue">${elem.age}</span></span><br>`)
    if (elem.species)
        ok.insertAdjacentHTML('beforeend', `<span>species: <span class="propValue">${elem.species}</span></span><br>`)
    if (elem.job) 
        ok.insertAdjacentHTML('beforeend', `<span>job: <span class="propValue">${elem.job}</span></span><br>`)
    if (elem.title) 
        ok.insertAdjacentHTML('beforeend', `<span>title: <span class="propValue">${elem.title}</span></span><br>`)
    if (elem.color) 
        ok.insertAdjacentHTML('beforeend', `<span>color: <span class="propValue">${elem.color}</span></span><br>`)
    return ok
}

const magician = {
    _hat: './assets/images/hat.png',
    _getPortrait() {
        if (this._portrait) return this._portrait;
        else return './assets/images/magician.png';
    },
    'do magic'() {
        console.log(`ABRACADABRA\n The prototype of ${this.name} is `);
        console.log(Object.getPrototypeOf(this));
    },
    'say Hello'(){
        console.log('Hi, my name is ' + this.name);
    }
};

function changeStatus(elem) {
    for (let i = 0; protoBtn[i]; i++) {
        protoBtn[i].setAttribute('class', 'protoBtn')
    }
    let name = elem.innerHTML.split(' ')[0]
    if (name === 'human') {
        Object.setPrototypeOf(magician, human)
        head.src = magician._getPortrait();
        createText(magician)
        protoBtn[1].setAttribute('class', 'protoBtn active')
  
    } else if (name === 'vampire') {
        Object.setPrototypeOf(magician, vampire)
        head.src = magician._getPortrait();
        createText(magician)
        protoBtn[2].setAttribute('class', 'protoBtn active')
    } else if (name === 'dog') {
        Object.setPrototypeOf(magician, dog)
        head.src = magician._getPortrait();
        createText(magician)
        protoBtn[3].setAttribute('class', 'protoBtn active')
    }
    else {
        Object.setPrototypeOf(magician, no)
        head.src = magician._getPortrait();
        createText(no)
        protoBtn[0].setAttribute('class', 'protoBtn active')
    }
}



function Creature(name, age, species) {
    this.name = name;
    this.age = age;
    this.species = species;
    this.sayHello = function () {
            console.log(`Hello, my name is ${this.name}`);
        }
}

Creature.prototype.sayHello = function () {
    console.log(`Hello, my name is ${this.name}`);
}

function Human(name, age, species, job) {
    Creature.apply(this, arguments);
    this.job = job;
    this._portrait = './assets/images/human.png';
}
Human.prototype = Object.create(Creature.prototype);
Human.prototype.constructor = Human;


function Vampire(name, age, species, job, title) {
   Human.apply(this,arguments); 
    this.title = title
    this._portrait = './assets/images/vampire.png';
}
Vampire.prototype = Object.create(Human.prototype);
Vampire.prototype.constructor = Vampire;


function Dog(name, age, species, color) {
    Creature.apply(this, arguments);
    this._portrait = './assets/images/dog.png';
    this.color = color;
}
Dog.prototype = Object.create(Creature.prototype);
Dog.prototype.constructor = Dog;

const no = new Object()
const human = new Human('Linda', 22, 'human', 'doctor');
const vampire = new Vampire('Vlad', 915, 'vampire', 'unemployed', 'count')
const dog = new Dog('Fluffy', 3, 'dog', 'brown')




let sayhello = (e) => {
    let name = e.target.innerHTML.toLowerCase();
    if(name === 'do magic'){
        magician["do magic"]()
    }else{
        magician['say Hello']()
    }
}