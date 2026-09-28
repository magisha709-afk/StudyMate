async function loadTasks() {
  const response = await fetch("http://localhost:3000/tasks");
  const tasks = await response.json();

  document.getElementById("list").innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task.subject + " - " + task.title;
    document.getElementById("list").appendChild(li);
  });
}

async function addTask() {
  const title = document.getElementById("task").value;
  const subject = document.getElementById("subject").value;

  await fetch("http://localhost:3000/tasks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, subject })
  });

  loadTasks();
}

loadTasks();