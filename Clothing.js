const backButton = document.querySelector('.js-back-button');
const clothingImage = document.querySelector('.js-jeans-image');
const clothingContainer = document.querySelector('.main-page');
const textClothingContainer = document.querySelector('.js-button-clothing-text-container');


clothingImage.addEventListener('click', () => {
  clothingContainer.innerHTML='';

  let textHTML =`
        <div class="top-container">
          <div class="button-clothing-text-container js-button-clothing-text-container">
            <div class="clothing">
              <h1 class="Clothing-text2">Jeans</h1>
              <p class="clothing-text-description">Explore our collection of jeans</p>
            </div>
            <div class="button-home-container">
              <button class="back-to-categories js-back-to-categories">Back</button>
            </div>
          </div>
        </div>
        
        <div class="jeans-container">
          <div class="jean-card">
            <div class="jean-image-container">
              <img src="Images and Icons/Clothing Collection/Slim Fit Denim.png" alt="jean image" class="jean-image">
            </div>
            <div class="jean-info-container">
              <p class="jean-name">Slim fit Denim</p>
              <p class="jean-price">$79.99</p>
              <p class="available">Available Sizes:</p>
              <div class="siezes-available">
                <button class="size">28</button>
                <button class="size">30</button>
                <button class="size">32</button>
                <button class="size">34</button>
                <button class="size">36</button>
              </div>
              <p class="colors-available">Colors:</p>
              <div class="color-available-container">
                <span class="color">Dark Blue</span>
                <span class="color">Light Blue</span>
              </div>
              <p class="available">Availability</p>
              <p class="stock">In Stock</p>
              <div class="button-cart-container">
                <button class="add-to-Cart">Add to Cart</button>
              </div>
            </div>
          </div>

          <!--second jean-->
          <div class="jean-card">
            <div class="jean-image-container">
              <img src="Images and Icons/Clothing Collection/Classic Straight Jeans.png" alt="jean image" class="jean-image">
            </div>
            <div class="jean-info-container">
              <p class="jean-name">Classic Straight Jeans</p>
              <p class="jean-price">$89.99</p>
              <p class="available">Available Sizes:</p>
              <div class="siezes-available">
                <button class="size">30</button>
                <button class="size">32</button>
                <button class="size">34</button>
                <button class="size">36</button>
              </div>
              <p class="colors-available">Colors:</p>
              <div class="color-available-container">
                <span class="color">Blue</span>
                <span class="color">Black</span>
              </div>
              <p class="available">Availability</p>
              <p class="stock">In Stock</p>
              <div class="button-cart-container">
                <button class="add-to-Cart">Add to Cart</button>
              </div>
            </div>
          </div>


           <div class="jean-card">
            <div class="jean-image-container">
              <img src="Images and Icons/Clothing Collection/Relaxed fit Denim.png" alt="jean image" class="jean-image">
            </div>
            <div class="jean-info-container">
              <p class="jean-name">Relaxed Fit Denim</p>
              <p class="jean-price">$74.99</p>
              <p class="available">Available Sizes:</p>
              <div class="siezes-available">
                <button class="size">28</button>
                <button class="size">30</button>
                <button class="size">32</button>
                <button class="size">34</button>

              </div>
              <p class="colors-available">Colors:</p>
              <div class="color-available-container">
                <span class="color">Light Blue</span>
                <span class="color">Medium Blue</span>
              </div>
              <p class="available">Availability</p>
              <p class="stock">Low Stock</p>
              <div class="button-cart-container">
                <button class="add-to-Cart">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
  `
  clothingContainer.innerHTML = textHTML;
  let backToCategory = document.querySelector('.js-back-to-categories');

  backToCategory.addEventListener('click', () => {
    window.location.href='Clothing.html'
  });

  const stock = document.querySelectorAll('.stock');

  stock.forEach((item) => {
    if (item.innerHTML === 'In Stock') {
      item.classList.add('in-stock-green');
      item.classList.remove('low-stock-green');
    } else if (item.innerHTML === 'Low Stock') {
      item.classList.add('low-stock-green');
      item.classList.remove('in-stock-green');
    }
  });

  

});

backButton.addEventListener('click', () =>{
  window.location.href='index.html';
});

