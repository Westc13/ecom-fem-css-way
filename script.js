const modal = document.getElementById("modal");

const cart = document.getElementById("nav-cart");
cart.addEventListener("click", () => {
  modal.classList.toggle("modal-open");
});
