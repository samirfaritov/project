let item;

const content = document.querySelector(".content");

function getItem() {
    item = JSON.parse(localStorage.getItem('item') || "[]")
    let itemHtml = `
    <div class="box">
    <div class="img">
    <img src="${item[0].products[0].images[0]}" alt="">
        </div>
        <div class="text" data-text>
        <h1 class="title">${item[0].products[0].title}</h1>
        <p class="des">${item[0].products[0].description}</p>
        <div class="rates">
        <h3><i class='bx bx-dollar'></i><span class="price">${item[0].products[0].price}</span></h3>
                <h3><i class='bx bx-star'></i><span class="star">${item[0].products[0].rating}</span></h3>
                <h3><i class='bx bxs-package' ></i><span class="count">${item[0].products[0].stock}</span></h3>
                </div>
            <button class="addItem" id="${item[0].products[0].id}" data-action >В избранное</button>
            </div>
    </div>
    `;
    content.insertAdjacentHTML("beforeend", itemHtml);
}


getItem()