const list = document.querySelector('#todo');
const form = document.querySelector('.input');
const check = document.querySelectorAll('.check');
const completed = document.querySelector('.completed');
const all = document.querySelector('.all')
console.log(check)

const generateItem = input => {

    const html = 
    `<li class="items">
    <div class="align">
        <input type="checkbox" name="check" class="check">
        <label for="check">${input}</label>
    </div>
    <i class="fa-brands fa-xbox delete"></i>
    </li>`

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

completed.addEventListener('click', event => {
    Array.from(list.children).forEach(item => {
        if(!item.firstElementChild.firstChild.nextSibling.checked){     
            item.style.display = 'none';
        }
    })
})

// When clicking on complete, i use this method to check if each item is not checked.
// if it isn't, display none will be toggled to hide the element.