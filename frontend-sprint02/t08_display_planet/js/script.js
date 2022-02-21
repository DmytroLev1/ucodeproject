

function init(){

    let a = prompt("Is this a planet in the solar system", '');
    let b = prompt("Does this planet have a ring system?", '');
    let c = prompt("Does this planet have a satellite?", '');
    let d = prompt("Do people live on this planet?", '');

function displayplanet(){
        if (a,c,d == "yes" && b == "no"){
                alert("This is Earth")
        } else if (a,c,d == "yes" && b == "no"){
                alert("This is Venus")
        } else if (a,b,c == "yes" && d == "no"){
                alert("This is Saturn")
        } else {
            alert("Didn't recognize!")
        }
    }
    displayplanet()
}
init();

