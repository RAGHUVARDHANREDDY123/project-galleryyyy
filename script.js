fetch('data/tasks.json')
  .then(response => response.json())
  .then(tasks => {
    const nav = document.getElementById('taskList');
    const frame = document.getElementById('contentFrame');

    tasks.forEach(task => {
      const btn = document.createElement('button');
      btn.textContent = task.title;
      btn.onclick = () => frame.src = task.file;
      nav.appendChild(btn);
    });
  });