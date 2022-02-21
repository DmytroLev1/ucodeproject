


function transformation() {
    let lab = document.getElementById('lab');
    let sub = document.getElementById('subject');

    
    if(sub.textContent === 'Human') {
        sub.textContent = 'Beast';
        lab.style.background = '#70964b';
        sub.style.fontSize = '130px';
        sub.style.letterSpacing = '6px';
        
    } else {
        sub.textContent = 'Human';
        lab.style.background = '#ffb300';
        sub.style.fontSize = '60px';
        sub.style.letterSpacing = '2px';
    }
}


