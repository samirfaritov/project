let arr;

const content = document.querySelector(".content");

function getItem() {
    arr = JSON.parse(localStorage.getItem('arr') || "[]")

        let itemHtml = `
        <div class="box">
        <div class="img">
        <img src="${arr[0].images[0]}" alt="">
            </div>
            <div class="text" data-text>
            <h1 class="title">${arr[0].title}</h1>
            <p class="des">${arr[0].description}</p>
            <div class="rates">
            <h3><i class='bx bx-dollar'></i><span class="price">${arr[0].price}</span></h3>
                    <h3><i class='bx bx-star'></i><span class="star">${arr[0].rating}</span></h3>
                    <h3><i class='bx bxs-package' ></i><span class="count">${arr[0].stock}</span></h3>
                    </div>
                <button class="addItem" id="${arr[0].id}" data-action >В избранное</button>
                </div>
        </div>
        `;
        content.insertAdjacentHTML("beforeend", itemHtml);
    }

getItem()