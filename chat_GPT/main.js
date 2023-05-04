// todolist.js 파일

let todoList = [];

function renderList() {
  let list = document.getElementById("todo-list");
  list.innerHTML = "";
  todoList.forEach((item, index) => {
    let li = document.createElement("li");
    li.innerText = item;
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener("click", () => {
      todoList.splice(index, 1);
      renderList();
    });
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
}

function addItem() {
  let input = document.getElementById("new-item");
  let item = input.value.trim();
  if (item) {
    todoList.push(item);
    input.value = "";
    renderList();
  }
}

function clearAll() {
  todoList = [];
  renderList();
}
