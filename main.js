const content = document.querySelector(".content");
let state = {
  todos: [],
  add: JSON.parse(localStorage.getItem('arr') || "[]")
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
            <div class="box" id="" >
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
                  <button class="addItem" id="${state.todos[0].products[i].id}" data-action >В избранное</button>
              </div>
            </div>
            `;
      content.insertAdjacentHTML("beforeend", itemHtml);
    }
  }
}

getTodos();

const tovar = document.querySelector('.tovar')
let active = false;



window.addEventListener("click", (e) => {
  if (e.target.hasAttribute("data-action")) {
    const text = e.target.closest('.addItem')

    let clicked = state.todos[0].products.filter((item) => item.id == e.target.id)
    text.classList.toggle('added')
    if (text.classList.contains('added')) {
      text.innerHTML = "Добавлено";
      state.add.push(clicked[0])
      localStorage.setItem('arr', JSON.stringify(state.add))
    } else {
      text.innerHTML = "В избранное";
      state.add = state.add.filter((item) => item.id !== clicked[0].id)
      localStorage.setItem('arr', JSON.stringify(state.add))
    }
  }
  tovar.innerHTML = state.add.length
  console.log(state.add);
});


const btn = document.querySelectorAll('button')

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', () => {
    location.href = '/html/korzina.html'
  })
}

