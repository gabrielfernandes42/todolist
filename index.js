const input = document.querySelector("#input");
const form = document.querySelector("form");
const checkbox = document.querySelector(".checkbox");
const listTodos = document.querySelector("#listTodos");
const message = document.querySelector(".message");
const textTodo = document.querySelector(".text-todo");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addNewTask();

  input.value = "";
});

// makes the task appear on the screen when "add new task" is pressed
function addNewTask() {
  if (input.value == "") {
    message.style.display = "block";
  } else {
    const divTodo = document.createElement("div");
    divTodo.classList.add("todo");
    form.appendChild(divTodo);

    const todoText = document.createElement("h2");
    todoText.innerText = input.value;
    todoText.classList.add("text-todo");
    divTodo.appendChild(todoText);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");
    divTodo.appendChild(checkbox);

    const deleteIcon = document.createElement("i");
    deleteIcon.innerHTML = '<i class="fa-solid fa-trash deleteBtn"></i>';
    divTodo.appendChild(deleteIcon);

    checkbox.addEventListener("click", () => {
      if (checkbox.checked) {
        todoText.style.textDecoration = "line-through";
        todoText.style.textDecorationColor = "red";
      } else {
        todoText.style.textDecoration = "none";
      }
    });

    message.style.display = "none";
  }
}

document.addEventListener("click", (e) => {
  const targetElement = e.target;
  const parentElement = targetElement.closest("div");

  if (targetElement.classList.contains("deleteBtn")) {
    parentElement.remove();
  }
});
