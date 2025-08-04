function addTask() {
  const input = document.getElementById('task-input');
  const taskText = input.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.className = 'task-item';

  const span = document.createElement('span');
  span.className = 'task-text';
  span.innerText = taskText;
  span.onclick = () => {
    span.classList.toggle('completed');
  };

  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = '✖';
  deleteBtn.className = 'delete-btn';
  deleteBtn.onclick = () => {
    li.remove();
  };

  li.appendChild(span);
  li.appendChild(deleteBtn);

  document.getElementById('task-list').appendChild(li);
  input.value = '';
}
