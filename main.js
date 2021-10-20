
function scrollProgress(){
  let scrollTop = (document.documentElement.scrollTop || window.scrollY || window.pageYOffset) + window.innerHeight;
  
  document.querySelectorAll(".content-item").forEach((elem) => {
//    console.log(elem.offsetTop);
    let target = elem.childNodes[3];
//    console.log(target);
//    100스크롤 올라가면 100 올라감
    let offset = (scrollTop - elem.offsetTop) * 0.2;
    target.style.transform = "translateY("+ -offset +"px)";
    });
  document.querySelectorAll(".analects-wrap").forEach(analect => {
    let analects = analect.querySelector(".analects");
    scrollTop-600 > analect.offsetTop ? analects.classList.add("show") : analects.classList.remove("show");
  });
}

function imgScrolling() {
  let imgs = document.querySelectorAll(".jumbotron .img img");
  let backImgs = document.querySelectorAll(".jumbotron .back-img img");
  console.log(imgs)
  let i = 0;
  imgs.forEach(element => element.classList.remove("show"))
  imgs[(i%imgs.length)].classList.add("show")
  i++;
  setInterval(function(){
    imgs.forEach(element => element.classList.remove("show"))
    imgs[(i%imgs.length)].classList.add("show")
    backImgs.forEach(element => element.classList.remove("show"))
    backImgs[(i%backImgs.length)].classList.add("show")
    i++;
  },5000);
}

window.addEventListener("scroll", scrollProgress);

$(document).ready(function(){
  scrollProgress();
  if (document.querySelectorAll(".jumbotron img").length > 0) { 
    imgScrolling();
  }
})
