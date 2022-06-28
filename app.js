const list = document.querySelector('#todo');
const form = document.querySelector('.input');
const check = document.querySelectorAll('.check');
const completed = document.querySelector('.completed');
const all = document.querySelector('.all');
const active = document.querySelector('.active')
const clearCompleted = document.querySelector('.clear-completed');
const itemCounter = document.querySelector('.number')
console.log(itemCounter)

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
    count++;
    updateDisplay();
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
        count--;
        updateDisplay();
    }
})

completed.addEventListener('click', event => {
    Array.from(list.children).forEach(item => {
        if(!item.firstElementChild.firstChild.nextSibling.checked){     
            item.style.display = 'none';
        } else if (item.firstElementChild.firstChild.nextSibling.checked){
            item.style.display = 'flex';
        }
    })
})

// ^
// When clicking on complete, i use this method to check if each item is not checked.
// if it isn't, display none will be toggled to hide the element.

all.addEventListener('click', event => {
    Array.from(list.children).forEach(item => {
        return item.style.display = 'flex';
    })
})

// ^
// similar to the method above but would showcase all items.


active.addEventListener('click', event => {
    Array.from(list.children).forEach(item => {
        if(!item.firstElementChild.firstChild.nextSibling.checked){     
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    })
})

// ^
// Same method applied to the completed event just swapped return values.

clearCompleted.addEventListener('click', event => {
    Array.from(list.children).forEach(item => {
        if(item.firstElementChild.firstChild.nextSibling.checked){     
            item.remove();
            count--;
            updateDisplay();
        } 
    })
})

// ^
// remove() to completely remove the item from the DOM

let count = 0;

function updateDisplay (){
    itemCounter.innerHTML = count;
}

updateDisplay();

// ^
// Created a function which would track how many items are in the todo.
// This function will be called inside event listeners that remove or add an item.
// to which the counter will update.