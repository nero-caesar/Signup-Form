let btn = document.getElementById('button');
let fName = document.getElementById('fname');
let text = document.getElementById('text');

btn.addEventListener('click', function(){
    if (fName.value === '') {
        window.href = 'main.html';
    } else {
        text.style.display = 'flex';
    }
})