window.onload = function my(){
    var number = this.getNumber();
    this.countMySquare(number);
}

function getNumber(){
    var number = prompt("Введите число");
    return number;
}

function countMySquare(number){
    alert(number + "=" + number * number)
}