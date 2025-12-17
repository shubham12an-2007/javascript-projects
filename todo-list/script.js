let btn = document.querySelector("#addBtn");
let input = document.querySelector("#taskInput");
let taskList = document.querySelector(".task-list");

btn.addEventListener("click", function () {
  if (input.value.trim() === "") return;

  // 🔹 new li for EVERY task
  let li = document.createElement("li");

  // 🔹 new span for EVERY task
  let span = document.createElement("span");
  span.textContent = input.value;

  // 🔹 delete button
  let delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.classList.add("delete");

  delBtn.addEventListener("click", function () {
    li.remove();
  });

  // 🔹 append inside li
  li.appendChild(span);
  li.appendChild(delBtn);

  // 🔹 append li to ul
  taskList.appendChild(li);

  input.value = "";
});
