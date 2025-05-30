const cups = document.querySelectorAll('.menu-button');
const mainImage = document.querySelector('.cup');
const circle = document.querySelector('.circle');


const dados = [
  { img: '../images/img1.png', cor: '#017143' },
  { img: '../images/img2.png', cor: '#eb7495' },
  { img: '../images/img3.png', cor: '#d752b1' }
];


document.querySelectorAll('.menu-button').forEach((button, index) => {

    button.addEventListener('click', function (event) {

        event.preventDefault(); 

        cups.forEach((cup, index) => {
        
          cup.addEventListener('click', () => {
        
            mainImage.src = dados[index].img;
            circle.style.background = dados[index].cor;
          });
        });


    });
});

