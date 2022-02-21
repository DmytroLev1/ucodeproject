let notification = document.querySelector('#notification')
notification.innerHTML = "Click on cell to sort the column"


const tiable = [
    { name: 'Mercury', diameter: 4879, day: 53, year: 0.24, Moons: 0, distance: 0.4},
    { name: 'Venus', diameter: 12100, day: 137, year: 0.6, Moons: 0, distance: 0.7},
    { name: 'Earth', diameter: 12742, day: 26, year: 1, Moons: 1, distance: 1},
    { name: 'Mars', diameter: 6780, day: 49, year: 1.88, Moons: 2, distance: 1.5},
    { name: 'Jupiter', diameter: 142984, day: 16, year: 11.86, Moons: 79, distance: 5.2},
    { name: 'Saturn', diameter: 116464, day: 1000, year: 29.45, Moons: 62, distance: 9.5},
    { name: 'Uranus', diameter: 50724, day: 1000, year: 84, Moons: 27, distance: 19.8},
    { name: 'Neptune', diameter: 49244, day: 52, year: 164.81, Moons: 14, distance: 30.1},

]

let placeholder = document.querySelector('#placeholder')
placeholder.innerHTML = "";
let tabel = document.createElement('table')
let arr = ["Planet", "Diameter,km", "Day,in Earth days", "Year,in Earth years", 
"Moons", "Distance from Sun,AU"]
let checkSort = false

createTabel(placeholder, 6, 9)

function createTabel(parent, cols, rows) {
    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr')
        for (let j = 0; j < cols; j++) {
            let td = document.createElement('td')
            if (i == 0) {
                td.innerText = arr[j]
            } else {
                if (j == 0) {
                    td.innerText = tiable[i - 1].name
                }
                if (j == 1) {
                    td.innerText = tiable[i - 1].diameter
                }
                if (j == 2) {
                    td.innerText = tiable[i - 1].day
                }
                if (j == 3) {
                    td.innerText = tiable[i - 1].year
                }
                if (j == 4) {
                    td.innerText = tiable[i - 1].Moons
                }
                if (j == 5) {
                    td.innerText = tiable[i - 1].distance
                }
            }
            tr.appendChild(td)
        }
        tabel.appendChild(tr)
    }
    parent.appendChild(tabel)
}

let reg = new Intl.Collator('en-EN')

function test(event) {
    if (event.target.innerHTML === "Planet") {
        if (!checkSort) {
            tiable.sort((a, b) => reg.compare(a.name, b.name))
            notification.innerHTML = "Sorting by Planet, order: ASC"
            checkSort = true
        } else {
            tiable.sort((a, b) => reg.compare(b.name, a.name))
            notification.innerHTML = "Sorting by Planet, order: DESC"
            checkSort = false
        }
    } else if (event.target.innerHTML === "Diameter,km") {
        if (!checkSort) {
            tiable.sort((a, b) => (a.diameter - b.diameter))
            notification.innerHTML = "Sorting by Diameter, order: ASC"
            checkSort = true
        } else {
            tiable.sort((a, b) => (b.diameter - a.diameter))
            notification.innerHTML = "Sorting by Diameter, order: DESC"
            checkSort = false
        }
    } else if (event.target.innerHTML === "Day,in Earth days") {
        if (!checkSort) {
            tiable.sort((a, b) => (a.day - b.day))
            notification.innerHTML = "Sorting by Day, order: ASC"
            checkSort = true
        } else {
            tiable.sort((a, b) => (b.day - a.day))
            notification.innerHTML = "Sorting by Day, order: DESC"
            checkSort = false
        }
    } else if (event.target.innerHTML === "Year,in Earth years") {
        if (!checkSort) {
            tiable.sort((a, b) => (a.year - b.year))
            notification.innerHTML = "Sorting by Year, order: ASC"
            checkSort = true
        } else {
            tiable.sort((a, b) => (b.year - a.year))
            notification.innerHTML = "Sorting by Year, order: DESC"
            checkSort = false
        }
    } else if (event.target.innerHTML === "Moons") {
        if (!checkSort) {
            tiable.sort((a, b) => (a.Moons - b.Moons))
            notification.innerHTML = "Sorting by Moons, order: ASC"
            checkSort = true
        } else {
            tiable.sort((a, b) => (b.Moons - a.Moons))
            notification.innerHTML = "Sorting by Moons, order: DESC"
            checkSort = false
        }
    } else if (event.target.innerHTML === "Distance from Sun,AU") {
        if (!checkSort) {
            tiable.sort((a, b) => (a.distance - b.distance))
            notification.innerHTML = "Sorting by Distance order: ASC"
            checkSort = true
        } else {
            tiable.sort((a, b) => (b.distance - a.distance))
            notification.innerHTML = "Sorting by Distance order: DESC"
            checkSort = false
        }
    }
    clearTabel();
}

let x = document.querySelector("tr")

x.addEventListener('click', test)

function clearTabel() {
    let count = 0
    let tdTabel = document.querySelectorAll("td")
    for (let k = 6; tdTabel[k]; k++) {
        if (k % 6 == 0) {
            tdTabel[k].innerHTML = tiable[count].name
            tdTabel[k + 1].innerHTML = tiable[count].diameter
            tdTabel[k + 2].innerHTML = tiable[count].day
            tdTabel[k + 3].innerHTML = tiable[count].year
            tdTabel[k + 4].innerHTML = tiable[count].Moons
            tdTabel[k + 5].innerHTML = tiable[count].distance
            count++;
        }
    }
}