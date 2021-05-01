const heaven = document.querySelector('.slider__heaven');
const text1 = document.querySelector('.slider__text');
const text2 = document.querySelector('.slider__text2');
const filter = document.querySelector('.projects__filter');
const htmlCards = document.querySelector('.html-section');
const jsCards = document.querySelector('.JS-section');
const personalCards = document.querySelector('.personal-section');
const menu = document.querySelector('.menu-mobile');
const test = document.querySelector('body');
const menu1 = document.querySelector( ".menuppal" )
window.addEventListener('scroll', () => {
  const value = window.scrollY;
  heaven.style.left = value * 0.2 + 'px';
  text1.style.paddingRight = value * 0.8 + 'px';
  text2.style.paddingLeft = value * 0.8 + 'px';
});


function jsFilter(){
  htmlCards.style.display = "none";
  jsCards.style.display = "grid";
  personalCards.style.display = "none";
}

function htmlFilter(){
  htmlCards.style.display = "grid";
  jsCards.style.display = "none";
  personalCards.style.display = "none";
}

function personalFilter(){
  htmlCards.style.display = "none";
  jsCards.style.display = "none";
  personalCards.style.display = "grid";
}

filter.addEventListener('click',(e)=>{
  const currentTarget = e.target;
  if(currentTarget.classList.contains('js')){
    jsFilter();
  }else if(currentTarget.classList.contains('HTML')){
    htmlFilter();
  }else{
    personalFilter();
  }
  }
)


// method
function toggleMenu (event) {
  event.preventDefault();
  this.classList.toggle('is-active');
  menu1.classList.toggle("is_active");
  if(menu1.classList.contains('is_active')){
    test.style.overflowY='hidden'
  }else{
    test.style.overflowY='unset'
  }
}
menu.addEventListener('click', toggleMenu, false);

