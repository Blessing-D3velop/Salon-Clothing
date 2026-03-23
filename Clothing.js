document.addEventListener('DOMContentLoaded', () => {
  const backButton = document.querySelector('.js-back-button');
  const clothingImage = document.querySelector('.js-jeans-image');
  const clothingContainer = document.querySelector('.main-page');
  const textClothingContainer = document.querySelector('.js-button-clothing-text-container');

  if (backButton) {
    backButton.addEventListener('click', () => {
      window.location.href = 'index.html';
    });
  }

  if (clothingImage) {
    clothingImage.addEventListener('click', () => {
      window.location.href = 'Clothing-Jeans.html';
    });
  }
});