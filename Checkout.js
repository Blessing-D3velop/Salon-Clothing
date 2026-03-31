import { cart } from "./Cart.js";
import { jeansArr } from "./Jeans.js";

const productContainer = document.querySelector('.js-products-container');

let renderProducts = (cart, jeansArr) => {

  productContainer.innerHTML = ''

  cart.forEach((product) => {

    const productId = product.jeanId;
    let matchingProduct;

    jeansArr.forEach((item) => {
      if(productId === item.id){
        matchingProduct = item;
      }
    });

    let jeansHTML = `
        <div class="product">

          <div class="image-container">
            <img src="${matchingProduct.image}" alt="jeans image" class="product-image">
          </div>

          <div class="product-container">
            <div class="product-name-container">
              <p class="prodcut-name">${matchingProduct.name}</p>
              <p class="prodcut-size">Size: M</p>
            </div>

            <div class="product-price-container">
              <p class="product-price">$${matchingProduct.price / 100}</p>
            </div>

            <div class="quantity-container">
              <p class="product-quantity">Quantity: ${product.quantity}</p>
              <span class="update-quantity-link link-primary">
                Update
              </span>
              <span class="delete-quantity-link link-primary js-delete-link" data-product-id =${matchingProduct.id}>
                Delete
              </span>
            </div>          
          </div>


        </div>
    `

    productContainer.innerHTML += jeansHTML;


    document.querySelectorAll('.js-delete-link')
      .forEach((link) => {
        link.addEventListener('click', () => {
          
          const productId = link.dataset.productId;
          console.log(productId);


        });
      });
  });
};

renderProducts(cart, jeansArr);

