import { cart, addToCart } from "./Cart.js";

const jeansArr = [
  {
    id: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    image: 'Images and Icons/Clothing Collection/Slim Fit Denim.png',
    name: 'Slim Fit Denim',
    price: 7999,
    size: 28,
    color: 'Black',
    stock: 'In Stock'
  },
  {
    id: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    image: 'Images and Icons/Clothing Collection/Classic Straight Jeans.png',
    name: 'Classic Straight Jeans',
    price: 8999,
    size: '',
    color: '',
    stock: 'In Stock'
  },
  {
    id: '83d4ca15-0f35-48f5-b7a3-1ea210004f2e',
    image: 'Images and Icons/Clothing Collection/Classic Straight Jeans.png',
    name: 'Relaxed Fit Denim',
    price: 7499,
    size: '',
    color: '',
    stock: 'Low Stock'
  }
];

const jeansContainer = document.querySelector('.js-jeans-container');

let renderJeans = (jeans) => {
  jeansContainer.innerHTML = '';

  jeans.forEach((jean) => {
    const html = `
      <div class="jean-card">
        <div class="jean-image-container">
          <img src="${jean.image}" alt="jean image" class="jean-image">
        </div>
        <div class="jean-info-container">
          <p class="jean-name">${jean.name}</p>
          <p class="jean-price">$${(jean.price / 100).toFixed(2)}</p>

          <p class="available">Available Sizes:</p>
          <div class="sizes-available">
            <button class="size js-size" data-size="28">28</button>
            <button class="size js-size" data-size="30">30</button>
            <button class="size js-size" data-size="32">32</button>
            <button class="size js-size" data-size="34">34</button>
            <button class="size js-size" data-size="36">36</button>
          </div>

          <p class="colors-available">Colors:</p>
          <div class="color-available-container">
            <button class="color js-color" data-color="dark-blue">Dark Blue</button>
            <button class="color js-color" data-color="Black">Black</button>
            <button class="color js-color" data-color="light-blue">Light Blue</button>
          </div>

          <p class="available">Availability</p>
          <p class="stock">${jean.stock}</p>

          <div class="button-cart-container">
            <button class="add-to-cart js-add-to-cart" data-jean-id="${jean.id}">Add to Cart</button>
          </div>
        </div>
      </div>
    `;

    jeansContainer.innerHTML += html;
  });

  let updateCartQunatity = () =>{
    let totalCartQuantity = 0;
    cart.forEach((item) => {
      totalCartQuantity += item.quantity;
    });
    document.querySelector('.js-cart-quantity').innerHTML = totalCartQuantity;
  }


  document.querySelectorAll('.js-add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
      const jeanId = button.dataset.jeanId;

      addToCart(jeanId);

      updateCartQunatity();

    });
  });


  document.querySelectorAll('.js-size').forEach((button) => {
    button.addEventListener('click', () => {
      const size = button.dataset.size;
    });
  });

  document.querySelectorAll('.js-color').forEach((button) => {
    button.addEventListener('click', () => {
      const color = button.dataset.color;
    });
  });
};


renderJeans(jeansArr);