const heaven = document.querySelector('.slider__heaven');
const text1 = document.querySelector('.slider__text');
const text2 = document.querySelector('.slider__text2');
const filter = document.querySelector('.projects__filter');
const htmlCards = document.querySelector('.html-section');
const jsCards = document.querySelector('.JS-section');
const personalCards = document.querySelector('.personal-section');
const menu = document.querySelector('.menu-mobile');
const body = document.querySelector('body');
const menu1 = document.querySelector( ".menuppal" )
const formulario = document.querySelector('.contact__me--form form');
//parallax
window.addEventListener('scroll', () => {
  const value = window.scrollY;
  heaven.style.left = value * 0.2 + 'px';
  text1.style.paddingRight = value * 0.8 + 'px';
  text2.style.paddingLeft = value * 0.8 + 'px';
});

//filter
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
})


// dont scroll when menu is open
function toggleMenu (event) {
  event.preventDefault();
  this.classList.toggle('is-active');
  menu1.classList.toggle("is_active");
  if(menu1.classList.contains('is_active')){
    body.style.overflowY='hidden'
  }else{
    body.style.overflowY='unset'
  }
}
menu.addEventListener('click', toggleMenu, false);


//github data

const UserUrl = "https://api.github.com/users/JLedezmaC";
const GithubData = () => {
  fetch(UserUrl, {
    method: "GET"
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.status);
      }

      return response.json();
    })
    .then((data) => {
      addData(data)
    })
    .catch((error) => {
      console.log("error", error);
    });
};

GithubData();

function addData(data){
  const TotalProyects = document.querySelector(".total-projects a")
  TotalProyects.innerHTML = `${data.public_repos}`;
  formulario.addEventListener("submit",()=>{
    formulario.elements[0].value = "";
    formulario.elements[1].value = "";
    formulario.elements[2].value = "";
    formulario.elements[3].value = "";
  });
}
