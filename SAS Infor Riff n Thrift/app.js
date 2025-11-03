const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "American Ultra Jazzmaster",
    price: 2069.99,
    colors: [
      {
        code: "brown",
        img: "./img/7.png",
      },
      {
        code: "blue",
        img: "./img/8.png",
      },
    ],
  },
  {
    id: 2,
    title: "American Ultra Jazz Bass V",
    price: 2399.99,
    colors: [
      {
        code: "lightgray",
        img: "./img/4.png",
      },
      {
        code: "green",
        img: "./img/3.png",
      },
    ],
  },
  {
    id: 3,
    title: "Strymon Nightsky Hall Reverb",
    price: 519.99,
    colors: [
      {
        code: "lightgray",
        img: "./img/2.png",
      },
      {
        code: "green",
        img: "./img/1.png",
      },
    ],
  },
  {
    id: 4,
    title: "Marshall 1x12 DSL40CR",
    price: 729.99,
    colors: [
      {
        code: "black",
        img: "./img/5.png",
      },
      {
        code: "lightgray",
        img: "./img/6.png",
      },
    ],
  },
  {
    id: 5,
    title: "Vintage Custom '55 Hardtail Stratocaster",
    price: 4200.00,
    colors: [
      {
        code: "gray",
        img: "./img/10.png",
      },
      {
        code: "black",
        img: "./img/9.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
