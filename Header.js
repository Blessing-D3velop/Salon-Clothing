
const home = document.querySelector('.js-home');
const salon = document.querySelector('.js-salon');
const clothing = document.querySelector('.js-clothing');
const about = document.querySelector('.js-about');
const contact = document.querySelector('.js-contact');
const heading =document.querySelector('.heading-text')

heading.addEventListener('click', () =>{
  window.location.href = 'index.html';
});

home.addEventListener('click', () =>{
  window.location.href = 'index.html';
});

salon.addEventListener('click', () =>{
  window.location.href = 'Salon.html';
});

clothing.addEventListener('click', () =>{
  window.location.href = 'Clothing.html';
});

about.addEventListener('click', () => {
  const aboutSection = document.getElementById('about-section');
  aboutSection?.scrollIntoView({ behavior: 'smooth' });
});

contact?.addEventListener('click', () =>{
  const contacSection = document.getElementById('contact-section');
  contacSection?.scrollIntoView({ behavior: 'smooth'});
});

