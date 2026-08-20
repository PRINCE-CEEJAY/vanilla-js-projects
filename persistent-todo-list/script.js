const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const searchInput = document.getElementById('search-input');
const filterBtns = document.querySelectorAll('.filter-btn');

let todosState = [
  {
    id: crypto.randomUUID(),
    text: 'This is my first todo',
    completed: false,
  },
];

function addTodo(e) {
  e.preventDefault();
  if (!todoInput.value) return;
  const newTodo = {
    id: crypto.randomUUID(),
    text: todoInput.value.trim(),
    completed: false,
  };
  updateState(newTodo);
}

function storeTodos(todos) {
  try {
    localStorage.setItem(JSON.stringify(todos), 'todos');
  } catch (error) {
    console.log('error while saving todo', error);
  }
}

function getStoredTodos() {
  try {
    const todos = localStorage.getItem('todo-list');
    return todos ? JSON.parse(todos) : [];
  } catch (error) {
    console.log('error while retrieving todos');
  }
}

function updateState(todo) {
  todoInput.value = '';
  createHTMLTodoList();
  todosState.push(todo);
  () => renderTodo(todosState); //using callback to access it immediately after push
}

function renderTodo(todos) {
  //todos = todosState
  const todoList = document.querySelector('.todo-list');
  const todoItem = document.querySelector('.todo-item');
  const todoCheckbox = document.querySelector('.todo-checkbox');
  const todoText = document.querySelector('.todo-text');
  const delBtn = document.querySelector('.delete-btn');

  for (let i = 0; i < todos.length; i++) {
    todoText.innerText = todos[i].text;
    todos[i].completed ? todoCheckbox.checked : !todoCheckbox.checked;
  }
}

function createHTMLTodoList() {
  const li = document.createElement('li');
  li.classList.add('.todo-item');
  li.setAttribute('data-id', Math.floor(Math.random() * 10000 + 1));
  li.innerText = 'todo 1';

  const input = document.createElement('input');
  input.setAttribute('type', 'checkbox');
  input.classList.add('.todo-checkbox');

  const span = document.createElement('span');
  span.classList.add('.todo-text');
  span.innerText = 'Buy groceries';

  const btn = document.createElement('button');
  btn.classList.add('.delete-btn');
  btn.innerText = 'X';

  //   append elements
  li.appendChild(input);
  li.appendChild(span);
  li.appendChild(btn);

  const ul = document.querySelector('.todo-list');
  ul.appendChild(li);
}

document.addEventListener('load', () => {
  const todos = localStorage.getItem('todos');
  todos ? (todosState = JSON.parse(todos)) : todosState;
  updateState();
});

addBtn.addEventListener('click', (e) => addTodo(e));
