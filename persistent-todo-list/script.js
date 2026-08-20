const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.querySelector('.todo-list');

let todosState = [];

function storeTodos(todos) {
  try {
    localStorage.setItem('todos', JSON.stringify(todos));
  } catch (error) {
    console.error('Error saving todos:', error);
  }
}

function getStoredTodos() {
  try {
    const todos = localStorage.getItem('todos');
    return todos ? JSON.parse(todos) : [];
  } catch (error) {
    console.error('Error retrieving todos:', error);
    return [];
  }
}

function addTodo(e) {
  e.preventDefault();
  const value = todoInput.value.trim();
  if (!value) return;

  const newTodo = {
    id: crypto.randomUUID(),
    text: value,
    completed: false,
  };

  todosState.push(newTodo);
  storeTodos(todosState);
  renderTodos(todosState);
  todoInput.value = '';
}

function createTodoElement(todo) {
  const li = document.createElement('li');
  li.classList.add('todo-item');
  li.setAttribute('data-id', todo.id);

  const input = document.createElement('input');
  input.type = 'checkbox';
  input.classList.add('todo-checkbox');
  input.checked = todo.completed;
  input.onchange = () => toggleCompleted(todo.id);

  const span = document.createElement('span');
  span.classList.add('todo-text');
  span.textContent = todo.text;

  if (todo.completed) {
    span.classList.add('completed');
  }

  const btn = document.createElement('button');
  btn.classList.add('delete-btn');
  btn.onclick = () => deleteTodo(todo.id);
  btn.textContent = 'X';

  li.append(input, span, btn);
  return li;
}

function renderTodos(todos) {
  todoList.innerHTML = '';
  todos.forEach((todo) => {
    const todoEl = createTodoElement(todo);
    todoList.appendChild(todoEl);
  });
}

function deleteTodo(id) {
  const todos = todosState.filter((todo) => todo.id !== id);
  storeTodos(todos);
  renderTodos(todos);
}

function toggleCompleted(id) {
  todosState = todosState.map((todo) => {
    if (todo.id === id) {
      return { ...todo, completed: !todo.completed };
    }
    return todo;
  });

  storeTodos(todosState);
  renderTodos(todosState);
}

document.addEventListener('DOMContentLoaded', () => {
  todosState = getStoredTodos();
  renderTodos(todosState);
});

addBtn.addEventListener('click', addTodo);
