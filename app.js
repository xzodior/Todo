const list = document.querySelector('#todo');
const form = document.querySelector('.input');

const generateItem = input => {

    const html = 
    `<li>
        <span>${input}</span>
        <i class="fa-brands fa-xbox delete"></i>
    </li>
    <hr>`

    list.innerHTML += html;
}

form.addEventListener('submit', event => {
    event.preventDefault();

    const input = form.add.value.trim();
    if(input.length) {
        form.reset();
        generateItem(input)
    } else {
        return false;
    }
})

list.addEventListener('click', event => {
    if(event.target.classList.contains('delete')){
        event.target.parentElement.remove();
    }
})