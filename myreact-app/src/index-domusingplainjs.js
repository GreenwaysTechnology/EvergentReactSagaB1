//dom element creation using plain js

function createElement() {
    let heading = document.createElement('h1')
    heading.innerHTML = 'Hello React!'
    heading.style.backgroundColor='yellow';
    document.getElementById('root').appendChild(heading);
}

createElement();