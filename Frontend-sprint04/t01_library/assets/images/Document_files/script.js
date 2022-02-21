let main_contentRendar = document.querySelector('.main_contentRendar')
let favorite = new Map()
class Films {
    constructor(props) {
        this.name = props.name;
        this.date = props.date
        this.actors = props.actors;
        this.description = props.description;
        this.img = props.img
    }
}

let Alice = {
    name: 'Alice\'s Adventures in Wonderland',
    date: 'by Lewis Carroll 1865',
    actors: ["Fantasy", 'Literary nonsense', 'Children\'s literature', 'Absurdist fiction'],
    description: "Alice's Adventures in Wonderland, widely beloved British children's book by Lewis Carroll, published in 1865.With its fantastical tales and riddles, it became one of the most popular works of English-language fiction. It was notably illustrated by British artist John Tenniel. The story centres on Alice, a young girl who falls asleep in a meadow and dreams that she follows the White Rabbit down a rabbit hole. She has many wondrous, often bizarre adventures with thoroughly illogical and very strange creatures, often changing size unexpectedly.",
    img: './assets/images/Wonderland.jpg'
}

let Dracula = {
    name: 'Dracula',
    date: 'by Bram Stoker 1897',
    actors: ["Novel", 'Horror fiction', 'Gothic fiction', 'Fantasy', 'Epistolary novel'],
    description: "Dracula, Gothic novel by Bram Stoker, published in 1897, that was the most popular literary work derived from vampire legends and became the basis for an entire genre of literature and film. Dracula comprises journal entries, letters, and telegrams written by the main characters.",
    img: './assets/images/Dracula.png'
}

let Tom = {
    name: 'The Adventures of Tom Sawyer',
    date: 'by Mark Twain 1876',
    actors: ['Novel', 'Children\'s literature', 'Humour', 'Satire', 'Adventure fiction'],
    description: "Enjoy the story of Tom Sawyer as a mischievous young boy carries on under the watchful eye of his Aunt Polly. Mark Twain's Tom Sawyer is one part trickster, one escape artist and one part very lucky fellow! The Adventures of Tom Sawyer takes the reader along on a series of entertaining adventures and pranks while Tom's youthful romance with his sweetheart Becky Thatcher blooms in the background. The Adventures of Tom Sawyer is one of Mark Twain's most beloved works. Twain, Mark.",
    img: './assets/images/tom.jpg'
}

let littleWomen = {
    name: 'Little Women',
    date: 'by Louisa May Alcott 1869',
    actors: ["Novel", 'Fiction', 'Children\'s literature', 'Comedy'],
    description: "Little Women, in full Little Women; or, Meg, Jo, Beth, and Amy, novel for children by Louisa May Alcott, published in two parts in 1868 and 1869. Her sister May illustrated the first edition. It initiated a genre of family stories for children. Meg, Jo, Beth, and Amy March are raised in genteel poverty by their loving mother, Marmee, in a quiet Massachusetts town while their father serves as an army chaplain during the American Civil War.",
    img: './assets/images/Little.jpg'
}

let Frankenstein = {
    name: 'Frankenstein',
    date: 'by Mary Shelley 1818',
    actors: ["Gothic novel", 'Horror fiction', 'Science fiction'],
    description: "Mary Shelley’s best-known book is Frankenstein; or, The Modern Prometheus (1818, revised 1831), a text that is part Gothic novel and part philosophical novel; it is also often considered an early example of science fiction. It narrates the dreadful consequences that arise after a scientist has artificially created a human being.(The man-made monster in this novel inspired a similar creature in numerous American horror films.)",
    img:"./assets/images/Frankenstein.jpg"
}

let Machine = {
    name: 'The Time Machine',
    date: 'by H. G. Wells 1895',
    actors: ['Science fiction', 'Dystopian Fiction'],
    description: "The Time Machine is the novel that gave us the concept of—and even the word for—a \"time machine.\" While it\’s not Wells' first story involving time travel, it is the one that most fully fleshes out the concept of a device that can send a person backwards and forwards in time with complete precision. Time machines have since become a staple of the science fiction and fantasy genres, making The Time Machine one of the most deeply influential science fiction novels of the era.",
    img: "./assets/images/Mashine.jpeg"
}

function createText(props) {
    return `<div class="main_content">
                <div id="header">
                <h1 id="titleFilm">${props.name}</h1>
                <i class="far fa-heart"></i>
                </div>
                <div id="data">${props.date}</div>
                <div class="actor">
                    <div class="nameActor">${props.actors[0]}</div>
                    <div class="nameActor">${props.actors[1]}</div>
                    <div class="nameActor">${props.actors[2]}</div>
                    <div class="nameActor">${props.actors[3]}</div>
                    <div class="nameActor">${props.actors[4]}</div>
                </div>
                <div class="description">${props.description}</div>
                </div>
                <div class="img">
                <img src=${props.img}>
                </div>`
}

let test = false;
document.querySelector('.list').addEventListener('click', (event) => {
    if (event.target != event.currentTarget) {
        main_contentRendar.innerHTML = ""
        switch (event.target.innerHTML) {
            case 'Dracula':
                main_contentRendar.insertAdjacentHTML('afterbegin', createText(new Films(Dracula)))
                break;
            case 'Alice\'s Adventures in Wonderland':
                main_contentRendar.insertAdjacentHTML('afterbegin', createText(new Films(Alice)))
                break;
            case 'The Adventures of Tom Sawyer':
                main_contentRendar.insertAdjacentHTML('afterbegin', createText(new Films(Tom)))
                break;
            case 'Little Women':
                main_contentRendar.insertAdjacentHTML('afterbegin', createText(new Films(littleWomen)))
                break;
            case 'Frankenstein':
                main_contentRendar.insertAdjacentHTML('afterbegin', createText(new Films(Frankenstein)))
                break;
            case 'The Time Machine':
                main_contentRendar.insertAdjacentHTML('afterbegin', createText(new Films(Machine)))
                break;
        }
        favorite.forEach((item) => {
            if (item.children[0].children[0].innerHTML === event.target.innerHTML) {
                document.querySelector('.fa-heart').setAttribute("class", "fas fa-heart")
            }
        })
        document.querySelector('.fa-heart').addEventListener('click', (elem) => {
            let getMovie = elem.target.closest('.main_content').children[0].children[0].innerHTML;
            if (!favorite.has(getMovie)) {
                document.querySelector('.fa-heart').setAttribute("class", "fas fa-heart")
                favorite.set(getMovie, elem.target.closest('.main_content'))
            }
            else {
                document.querySelector('.fa-heart').setAttribute("class", "far fa-heart")
                favorite.delete(getMovie)
            }
        })
    }
})

document.querySelector("#btnAll").addEventListener('click', () => {
    document.querySelector('.list').innerHTML = ' '
    document.querySelector('.list').insertAdjacentHTML('afterbegin', `<p>Alice's Adventures in Wonderland</p>
    <p>Dracula</p>
    <p>The Adventures of Tom Sawyer</p>
    <p>Little Women</p>
    <p>Frankenstein</p>
    <p>The Time Machine</p>`
    )
})

document.querySelector('#btnFavorite').addEventListener('click', () => {
    document.querySelector('.list').innerHTML = ''
    favorite.forEach((item) => {
        document.querySelector('.list').insertAdjacentHTML('afterbegin', `<p>${item.children[0].children[0].innerHTML}</p>`)
    })
})