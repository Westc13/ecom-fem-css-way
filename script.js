// Open Nav Cart Content
const modal = document.getElementById("modal");

const cart = document.getElementById("nav-cart");
cart.addEventListener("click", () => {
  modal.classList.toggle("modal-open");
});

// Change Count of items using plus and minus buttons
const count = document.getElementById("count");
const add = document.getElementById("plus");
let itemCount = 0;
add.addEventListener("click", () => {
  itemCount++;
  count.innerHTML = itemCount;
});

const reduce = document.getElementById("minus");
reduce.addEventListener("click", () => {
  if (itemCount > 0) {
    itemCount--;
    count.innerHTML = itemCount;
  }
});
