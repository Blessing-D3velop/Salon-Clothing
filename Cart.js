export let cart = JSON.parse(localStorage.getItem('cart')) || [
  {
    jeanId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2
  },
  {
    jeanId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1
  },
  {
    jeanId: '83d4ca15-0f35-48f5-b7a3-1ea210004f2e',
    quantity: 3
  }
];

export let addToCart = (jeanId) => {
  let matchingItem;

  cart.forEach((item) => {
    if (item.jeanId === jeanId) {
      matchingItem = item;
    }
  });

  if (matchingItem) {
    matchingItem.quantity++;
  } else {
    cart.push({
      jeanId: jeanId,
      quantity: 1
    });
  }
}

let removeProduct = (productId => {

})