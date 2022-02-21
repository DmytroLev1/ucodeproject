let names = prompt("What your name?")
let name1 = prompt("What your last name?")
let regular = new RegExp("^[A-Za-z]*$")


if (names && regular.test(names) && name1 && regular.test(name1)) {
    names = names[0].toUpperCase() + names.slice(1).toLowerCase()
    name1 = name1[0].toUpperCase() + name1.slice(1).toLowerCase()
    alert(`Hello, ${names} ${name1}!`)
    console.log(`Hello, ${names} ${name1}!`)
} else {
    alert("Wrong input.")
}