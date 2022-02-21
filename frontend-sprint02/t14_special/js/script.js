let input = parseInt(prompt('takes a number from 1 to 4', ''));


if  (input < 1 || input > 4) {
alert('Wrong input')
} else if (input == 1) {
alert(input * 2 / 'a')
} else if (input == 2){
alert(input - input / 0)
} else if (input == 3){
alert(0 * Infinity)
} else if (input == 4){
alert(isFinite(input * 40000000))
}