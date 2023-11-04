// eslint-disable-next-line no-undef, prefer-const
let addList = document.querySelector('#add');
console.log(addList);
// eslint-disable-next-line no-undef
const input = document.querySelector('#input-task');
console.log(input);
// eslint-disable-next-line no-undef
const container = document.querySelector('#container');
console.log(container);

// eslint-disable-next-line no-undef
const taskContainer = document.querySelector('.task-container');

// eslint-disable-next-line no-undef, prefer-const
let task = document.createElement('div');
task.classList.add('task');
task.setAttribute('class', 'task');
console.log(task);
// eslint-disable-next-line no-undef
//  document.body.appendChild(task);

function New() {
  if (input.value === '')
    // eslint-disable-next-line no-alert, no-undef
    alert('Please enter input');
  else {
    // eslint-disable-next-line no-undef
    const newTask = document.createElement('div');
    newTask.classList.add('task');
    taskContainer.appendChild(newTask);

    //creating the popList
    // eslint-disable-next-line no-undef
    const li = document.createElement('li');
    li.setAttribute('id', 'newList');
    li.innerText = `${input.value}`;
    newTask.appendChild(li);

    //creating the CheckButton
    // eslint-disable-next-line no-undef
    const checkButton = document.createElement('button');
    checkButton.innerText = '✓';
    checkButton.setAttribute('id', 'box');
    newTask.appendChild(checkButton);

    //creating the deletButton
    // eslint-disable-next-line no-unused-vars, no-undef
    const deletButton = document.createElement('button');
    deletButton.setAttribute('id', 'box2');
    // eslint-disable-next-line no-undef
    deletButton.innerText = '🚮';
    newTask.appendChild(deletButton);

    input.value = '';

    // eslint-disable-next-line no-undef

    checkButton.addEventListener('click', () => {
      li.style.textDecoration = 'line-through';
    });

    
  deletButton.addEventListener('click', (e) => {
    const { target } = e;

    target.parentElement.remove();
    // taskContainer.removeChild(task);
  });

  }
  
}

addList.addEventListener('click', New);
