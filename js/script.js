const selectLang = document.querySelectorAll('.language');
const allLang = ['ua', 'en', 'ru']

selectLang.forEach(e => e.addEventListener('click', function() {
    let langClick = e.innerHTML;
    changeURLLanguage(langClick)
}));

function changeURLLanguage(lang) {
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substring(1);
    if(!allLang.includes(hash)) {
        location.href = window.location.pathname + '#en';
        location.reload();
    }

    for(let key in language) {
        document.querySelector('.lng-' + key).innerHTML = language[key][hash];
    }
}

changeLanguage();



const button = document.querySelector('.button');






























function slidesPlugin(activeSlide = 0) {
    const slides = document.querySelectorAll('.slide');

    slides[activeSlide].classList.add('active');

    for (const slide of slides) {
        slide.addEventListener('click', () => {
            clearClassActive();


            slide.classList.add('active');
        })
    }

    function clearClassActive() {
        slides.forEach((slide) => {
            slide.classList.remove('active');
        });
    }
}

slidesPlugin();


$(document).ready(function(){
    let mouseX, mouseY;
    let ww = $( window ).width();
    let wh = $( window ).height();
    let traX, traY;
    $(document).mousemove(function(e){
      mouseX = e.pageX;
      mouseY = e.pageY;
      traX = ((4 * mouseX) / 570) + 40;
      traY = ((4 * mouseY) / 570) + 50;
      $(".title").css({"background-position": traX + "%" + traY + "%"});
    });
  });














  function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu_button', '.burger-menu_lines');
    let links = menu.find('.burger-menu_link');
    let overlay = menu.find('.burger-menu_overlay');
    
    button.on('click', (e) => {
      e.preventDefault();
      toggleMenu();
    });
    
    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());
    
    function toggleMenu(){
      menu.toggleClass('burger-menu_active');
      
      if (menu.hasClass('burger-menu_active')) {
        $('body').css('overlow', 'hidden');
      } else {
        $('body').css('overlow', 'visible');
      }
    }
  }
  
  burgerMenu('.burger-menu');



  // Animation

  const animItems = document.querySelectorAll('._anim-items');

  if(animItems.length > 0) {

    window.addEventListener('scroll', animOnScroll)

    function animOnScroll() {
       for(let index = 0; index < animItems.length; index++) {
         const animItem = animItems[index];
         const animItemHeight = animItem.offsetHeight;
         const animItemOffset = offset(animItem).top;
         const animStart = 4;

         let animItemPoint = window.innerHeight - animItemHeight / animStart;

         if(animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
         }

         if((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
            animItem.classList.add('_active');
         } else {
           if(!animItem.classList.contains('_anim-no-hide'))
            animItem.classList.remove('_active');
         }
       }
    }

    function offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.scrollX || document.documentElement.scrollLeft,
        scrollTop = window.scrollY || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    setTimeout(() => {
      animOnScroll();
    }, 300);
    
  }
