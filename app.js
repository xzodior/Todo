const list = document.querySelector('#todo');
const form = document.querySelector('.input');

form.addEventListener('submit', event => {
    event.preventDefault();

    const input = form.add.value.trim();  
    if (input.length){
        form.reset();
    }
})