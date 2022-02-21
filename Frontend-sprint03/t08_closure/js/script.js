
// function concat(string1, string2) {
//     if (string2 === "English") {
//         string2 = "Hello"
//     } if (arguments.length === 2) {
//         return `${string2}, ${string1}`
//     } else if (arguments.length === 1 & prompt() == 'Spanish') {
//          prompt("") = 'Hola'
//         return string1 + " " + string2
//     }
// }

function concat(string1, string2) {
    if (arguments.length === 2 & string2 == 'English') {
        return `Hello, ${string1}`
    } else if (arguments.length === 1){
        let result = prompt("")
        return `${result} ${string1}`
    }
}
let phrase1 = concat("space", "English");
let output = phrase1;
console.log(output); // Hello, space!


let phrase2 = concat("ucoder");
output = phrase2();
// a prompt appears. Enter "Spanish" into the prompt

console.log(output); // Hola, ucoder!
console.log(phrase2.count); //