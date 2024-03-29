const todoinput = document.querySelector('.todo-input');
const todobutton = document.querySelector('.todo-button');
const todolist = document.querySelector('.todo-list');

// Event Listeners
todobutton.addEventListener('click',addtodo);
todolist.addEventListener('click',deletecheck);

// Functions
function addtodo(Event){
    Event.preventDefault();
    //Creating div class in html
    const tododiv = document.createElement('div');
    tododiv.classList.add('todo');
    //Creating li in html
    const newtodo = document.createElement('li');
    newtodo.innerText = todoinput.value;
    newtodo.classList.add('todo-item');
    tododiv.appendChild(newtodo);
    //Completed Button
    const completedbutton = document.createElement('button');
    completedbutton.innerHTML = '<i class="fas fa-check"></i>';
    completedbutton.classList.add('complete-btn');
    tododiv.appendChild(completedbutton);
    //Trash Btn
    const trashbutton = document.createElement('button');
    trashbutton.innerHTML = '<i class="fas fa-trash"></i>';
    trashbutton.classList.add('trash-btn');
    tododiv.appendChild(trashbutton);
    //Appending
    todolist.appendChild(tododiv)
    todoinput.value = "";
} 
function deletecheck(e){
    const item = e.target;
    // Deleting todo
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        todo.remove();
    }
    // Checking
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
        
    }
}  