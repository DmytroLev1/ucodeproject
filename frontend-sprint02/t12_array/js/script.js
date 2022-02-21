
var moons= ["Phobos", "Deimos", "Io", "Europa", "Callisto"];

function firstElements(arr, n) {
    let sput = [];
    if (n <= arr.length) {
        for (let i = 0; i < n; i++) {
            sput.push(arr[i]);
        } 
        } else {
            sput = arr;
    } 
    return sput;
}
console.log(firstElements(moons, 2)) 