const cups = document.querySelectorAll('.menu-button');
const mainImage = document.querySelector('.cup');
const circle = document.querySelector('.circle');


const dados = [
  { img: '../images/img1.png', cor: '#017143' },
  { img: '../images/img2.png', cor: '#eb7495' },
  { img: '../images/img3.png', cor: '#d752b1' }
];


cups.forEach((cup, index) => {

  cup.addEventListener('click', () => {

    mainImage.src = dados[index].img;
    circle.style.background = dados[index].cor;
  });
});
