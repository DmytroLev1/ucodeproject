
let block = document.getElementById('countries').children


for (let i in block) {
    let getClass = block[i].getAttribute('class');
    let getData = block[i].getAttribute('data-feature')
    if (getClass !== 'americas' && getClass !== 'asia' && getClass !== 'oceania' && getClass !== 'africa' && getClass !== 'europa') {
        block[i].className = 'europe'    
    }
    if (!getData) {
    block[i].setAttribute('data-feature', 'none'); 
}


getData = block[i].getAttribute('data-feature').split(' ');
 block[i].appendChild(document.createElement('br'));
 
    for (let j in getData) {
        let div = document.createElement('div');
        div.className = `feature ${getData[j]}`

        if (getData[j] == 'none') {
            let line = document.createElement('div');
            line.className = 'line'
            div.appendChild(line);
        }
        block[i].appendChild(div);
    }
}

