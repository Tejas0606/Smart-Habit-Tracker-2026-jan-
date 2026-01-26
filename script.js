let tasks = [];
let habits = [];
let currentFilter = "all";


const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const prioritySelect = document.getElementById("priority-select");
const dueDateInput = document.getElementById("due-date");
const taskList = document.getElementById("task-list");

const habitForm = document.getElementById("habit-form");
const habitInput = document.getElementById("habit-input");
const habitList = document.getElementById("habit-list");

const totalTasksEl = document.getElementById("total-tasks");
const completedTasksEl = document.getElementById("completed-tasks");
const filterButtons = document.querySelectorAll(".filter-btn");


function saveData() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  localStorage.setItem("habits", JSON.stringify(habits));
}

function loadData() {
  tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  habits = JSON.parse(localStorage.getItem("habits")) || [];
}


function renderTasks() {
  taskList.innerHTML = "";

  let filteredTasks = tasks.filter(task => {
    if (currentFilter === "active") return !task.completed;
    if (currentFilter === "completed") return task.completed;
    return true;
  });

  filteredTasks.forEach(task => {
    const li = document.createElement("li");
    li.className = `task-item ${task.completed ? "completed" : ""}`;

    const left = document.createElement("span");
    left.textContent = task.title;
    left.classList.add(`priority-${task.priority}`);

    left.addEventListener("click", () => {
      task.completed = !task.completed;
      saveData();
      renderTasks();
      updateStats();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", () => {
      tasks = tasks.filter(t => t.id !== task.id);
      saveData();
      renderTasks();
      updateStats();
    });

    li.appendChild(left);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}


function renderHabits() {
  habitList.innerHTML = "";

  const today = new Date().toDateString();

  habits.forEach(habit => {
    const li = document.createElement("li");
    li.className = "habit-item";

    const label = document.createElement("span");
    label.textContent = `${habit.name} (Streak: ${habit.streak})`;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = habit.lastCompleted === today;

    checkbox.addEventListener("change", () => {
      if (habit.lastCompleted !== today) {
        habit.streak++;
        habit.lastCompleted = today;
        saveData();
        renderHabits();
      }
    });

    li.appendChild(label);
    li.appendChild(checkbox);
    habitList.appendChild(li);
  });
}


function updateStats() {
  totalTasksEl.textContent = tasks.length;
  completedTasksEl.textContent = tasks.filter(t => t.completed).length;
}




taskForm.addEventListener("submit", e => {
  e.preventDefault();

  const task = {
    id: Date.now(),
    title: taskInput.value.trim(),
    priority: prioritySelect.value,
    completed: false
  };

  if (!task.title) return;

  tasks.push(task);
  taskInput.value = "";
  saveData();
  renderTasks();
  updateStats();
});

habitForm.addEventListener("submit", e => {
  e.preventDefault();

  const name = habitInput.value.trim();
  if (!name) return;

  habits.push({
    id: Date.now(),
    name,
    streak: 0,
    lastCompleted: null
  });

  habitInput.value = "";
  saveData();
  renderHabits();
});




filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".filter-btn.active").classList.remove("active");
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    renderTasks();
  });
});



loadData();
renderTasks();
renderHabits();
updateStats();
