const input = document.querySelector("#input");
const form = document.querySelector("form");
const checkbox = document.querySelector(".checkbox");
const listTodos = document.querySelector("#listTodos");

const message = document.querySelector(".message");
const textTodo = document.querySelector(".text-todo");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  addNewTask();

  input.value = "";
});

function addNewTask() {
  if (input.value == "") {
    message.style.display = "block";
  } else {
    listTodos.insertAdjacentHTML(
      "afterbegin",
      `
        <ul class="todo">
            <div>
                <p>${input.value}</p>
            </div>
            <div>
                <input class="checkbox" type="checkbox" />
                <img class="trash-can" src="img/trash.png" alt="trash-can" />
            </div>
        </ul>

        `
    );

    message.style.display = "none";
  }
}

function isChecked() {
  checkbox.addEventListener("click", () => {
    if (checkbox.checked == true) {
      textTodo.style.textDecoration = "line-through";
      textTodo.style.textDecorationColor = "red";
    } else {
      textTodo.style.textDecoration = "none";
    }
  });
}
isChecked();
