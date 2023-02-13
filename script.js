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

// Switch out hero images with the click of a thumbnail image
const images = [
  {
    thumbnail: "./images/image-product-1-thumbnail.jpg",
    hero: "./images/image-product-1.jpg",
  },
  {
    thumbnail: "./images/image-product-2-thumbnai.jpg",
    hero: "./images/image-product-2.jpg",
  },
  {
    thumbnail: "./images/image-product-3-thumbnail.jpg",
    hero: "./images/image-product-3.jpg",
  },
  {
    thumbnail: "./images/image-product-4-thumbnail.jpg",
    hero: "./images/image-product-4.jpg",
  },
];

const thumbnails = document.querySelectorAll(".thumbnail");
const heroImage = document.querySelector(".hero-image");
const carousel = document.getElementById("carousel");
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    heroImage.src = images[index].hero;
    carousel.classList.remove("carousel");
    carousel.classList.add("carousel-open");
  });
});

// Build a pop up carousel for hero

const closeCarousel = document.querySelector(".close-button");
closeCarousel.addEventListener("click", () => {
  carousel.classList.remove("carousel-open");
  carousel.classList.add("carousel");
});

let slides = document.getElementsByClassName("slides");
var slideIndex = 1;
showSlides(slideIndex);

const plusSlides = (n) => {
  showSlides((slideIndex += n));
};
const showSlides = (n) => {
  let i;
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
};

// Add modal cart contents
// create ul to hold all the purchased items
// each list contains an image of the item, the section they are from, individual item price, quantity and total price, as well as the trash can icon that can delete this entry
// STEP 1: create ul to hold all purchased items
//const list = document.createElement("ul");
// STEP 2: create li to hold each purchased items
//const listItems = [];
//add thumbnail image of the product added to cart
