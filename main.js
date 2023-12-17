const content = document.querySelector(".content");
let state = {
  todos: [],
};

function getTodos() {
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((response) => (state.todos = state.todos.concat(response)))
    .then((res) => {
      if (res.length > 0) {
        createTodo();
      }
    });
}

function createTodo() {
  if (state.todos.length > 0) {
    for (let i = 0; i < state.todos[0].products.length; i++) {
      let itemHtml = `
            <div class="box">
            <div class="img">
            <img src="${state.todos[0].products[i].images[0]}" alt="">
                </div>
                <div class="text" data-text>
                <h1 class="title">${state.todos[0].products[i].title}</h1>
                <p class="des">${state.todos[0].products[i].description}</p>
                <div class="rates">
                <h3><i class='bx bx-dollar'></i><span class="price">${state.todos[0].products[i].price}</span></h3>
                        <h3><i class='bx bx-star'></i><span class="star">${state.todos[0].products[i].rating}</span></h3>
                        <h3><i class='bx bxs-package' ></i><span class="count">${state.todos[0].products[i].stock}</span></h3>
                        </div>
                    <button class="addItem" id="btn" data-action>В избранное</button>
                    </div>
            </div>
            `;
      content.insertAdjacentHTML("beforeend", itemHtml);
    }
  }
}

getTodos();

let active = false;

window.addEventListener("click", (e) => {
  let a = e.target.hasAttribute("data-action");
  if (a) {
    
  }
});

// for (let i = 0; i < b.length; i++) {
//   b[i].addEventListener("click", () => {
//     active = !active;
//     if (active) {
//       b[i].style.backgroundColor = "#1F86FF";
//       b[i].innerHTML = "Добавлено";
//       b[i].style.color = "#fff";
//     } else {
//       b[i].style.backgroundColor = "#fff";
//       b[i].innerHTML = "В избранное";
//       b[i].style.color = "#000";
//     }
//   });
// }