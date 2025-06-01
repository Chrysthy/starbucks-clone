const buttons = document.querySelectorAll('.menu-button');
const mainImage = document.querySelector('.cup');
const circle = document.querySelector('.circle');

const bellButton = document.getElementById('bell-button');
const bellSound = new Audio('src/audio/bell.mp3');

const dados = [
  { img: 'src/images/img1.png', cor: '#017143' },
  { img: 'src/images/img2.png', cor: '#eb7495' },
  { img: 'src/images/img3.png', cor: '#d752b1' }
];

buttons.forEach((button, index) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    mainImage.src = dados[index].img;
    circle.style.background = dados[index].cor;
  });
});

bellButton.addEventListener('click', () => {
  bellSound.play();
  bellSound.volume = 0.8;
})