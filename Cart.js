export let cart = [

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