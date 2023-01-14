const cards = document.querySelectorAll('.card');

for ( const card of cards ) {
    const num = card.dataset.number;
    const parseNum = parseInt(num)
    if ( isNaN(parseNum) ) {
        const newSign = document.createElement('div');
        newSign.classList.add('sign');
        card.appendChild(newSign);
    } else {
        for (let i=0; i < num; i++) {
            const newSign = document.createElement('div');
            newSign.classList.add('sign');
            card.appendChild(newSign);            
        }
    }
    const top = document.createElement('div');
    top.classList.add('num-top');
    top.textContent = num;
    const bottom = document.createElement('div');
    bottom.classList.add('num-bottom');
    bottom.textContent = num;
    card.append(top, bottom);
}