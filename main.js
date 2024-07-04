const displayKey = document.querySelector('.key h2')
const displayKeyCode = document.querySelector('.keyCode h2')
const keyCodeDiv = document.querySelector('.keyCode')
const overlay = document.querySelector('.overlay')

window.addEventListener('keydown' , (e) => {
    overlay.classList.add('hide')
    displayKey.innerText = e.key;
    displayKeyCode.innerText = e.keyCode;
    if(e.keyCode === 32) {
        displayKey.innerText = `'space'`;
    }
})

keyCodeDiv.addEventListener('click', (e) => {
    const textarea = document.createElement('textarea');
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'absolute';
    textarea.value = keyCodeDiv.querySelector('h2').innerText
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea)
    keyCodeDiv.querySelector('p').innerText = 'copied'
    setTimeout(() => {
        keyCodeDiv.querySelector('p').innerText = 'click to copy'
    }, 1000);
})
    
    
