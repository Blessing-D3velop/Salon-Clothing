
const saloHairstyles =[
  {
    image:'Images and Icons/Salon Collection/photo-1511920922889-5c35bfd95a7f.jpg',
    name:'Beard Trim & Shape',
    description:'Precision beard grooming and styling service',
    price: 30
  },
  {
    image:'Images and Icons/Salon Collection/photo-1550791752-97b2f57d2b15.jpg',
    name:'Color Treatment',
    description:'Full color service with premium organic products',
    price:120
  },
  {
    image:'Images and Icons/Salon Collection/photo-1580618672591-eb180b1a973f.jpg',
    name:'Blow Dry & Style',
    description:'Professional blow dry with premium styling products',
    price:40
  },
  {
    image:'Images and Icons/Salon Collection/photo-1654097803253-d481b6751f29.jpg',
    name:'Modern Fade',
    description:'Contemporary fade with precise styling and clean lines',
    price:55
  },
  {
    image:'Images and Icons/Salon Collection/hair-stylehair-styles-for-boys-hair-styles-men-salon-near-me-hair-boy-hair-salon-near-me-salon-in-mira-road-salons-hair-styles-for-wedding-near-me-17.jpg',
    name:'Mohwak & Beard Trim',
    description:'Full head and beard services with premium products',
    price:99
  },

  {
    image:'Images and Icons/Salon Collection/jumbo-twists.jpg',
    name:'Curly Braids',
    description:'Latest trending african woman curly hairstyle done with passion and care',
    price:49
  },

  {
    image:'Images and Icons/Salon Collection/TOP-AFRO-HAIR-TRENDS-AT-AFROTHERAPY-SALON-IN-EDMONTON-NORTH-LONDON-1.jpeg',
    name:'Light-Blue Dye',
    description:'Reefreshing hair color done from premium blue inecto',
    price:19
  },


];

let hairstylesContainer = document.querySelector('.hairstyles-cards-container');
let searchInputElement = document.querySelector('.js-search-hairstyle')

//display hairstyles
let renderHaisrtyles = (hairstyles) => {
  hairstylesContainer.innerHTML = '';

  hairstyles.forEach((hairstyle) => { 
    let html = `
      <div class="hairstyle-card">
        <div class="hairstyle-image-container">
          <img src="${hairstyle.image}" alt="hairstyle image" class="hairstyle-image">
        </div>
        <div class="haircut-details-container">
          <p class="haircut-name">${hairstyle.name}</p>
          <p class="haircut-description">${hairstyle.description}</p>
          <div class="haircut-price-booking-button">
            <p class="haircut-price">$${hairstyle.price}</p>
            <button class="Book-button">Book Now</button>
          </div>
        </div>
      </div>
    `;
    hairstylesContainer.innerHTML += html;
  });

  //Book Now
  document.querySelectorAll('.Book-button').forEach(button => {
    button.addEventListener('click', () => {
      let hairstyleName = button.getAttribute('data-name');
      window.location.href = `mailto:blessingmuthivhi@gmail.com?subject=Booking: ${hairstyleName}`;
    });
  });
};

//filter Hairstyles
let searchHairstyles = () =>{
  let searchInput = searchInputElement.value.toLowerCase();
  
  let filteredHairstyles = saloHairstyles.filter(hairstyle => {
    return hairstyle.name.toLowerCase().includes(searchInput)
  });

  renderHaisrtyles(filteredHairstyles);
}



searchInputElement.addEventListener('input', searchHairstyles);

let backButton = document.querySelector('.js-back-button');

backButton.addEventListener('click', () => {
  window.location.href = "index.html";
});

renderHaisrtyles(saloHairstyles);

