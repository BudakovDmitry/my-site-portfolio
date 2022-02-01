let card1 = document.querySelector('#card-1');
let card2 = document.querySelector('#card-2');
let card3 = document.querySelector('#card-3');
let card4 = document.querySelector('#card-4');
let card5 = document.querySelector('#card-5');
let card6 = document.querySelector('#card-6');



let backCard1 = document.querySelector('.card-text-back1')
let backCard2 = document.querySelector('.card-text-back2')
let backCard3 = document.querySelector('.card-text-back3')
let backCard4 = document.querySelector('.card-text-back4')
let backCard5 = document.querySelector('.card-text-back5')
let backCard6 = document.querySelector('.card-text-back6')


let buttonCube = document.querySelector('.button-cube')
let textCube = document.querySelector('.text-cube') 


let text = document.querySelector('.text');



let textCardThreeR = ['Текст карточки 1', 'Текст карточки 2', 'Текст карточки 3', 'Текст карточки 4', 'Текст карточки 5', 'Текст карточки 6', 'Текст карточки 7', 'Текст карточки 8'];

let textCardVerge = ['Текст карточки 1', 'Текст карточки 2', 'Текст карточки 3', 'Текст карточки 4', 'Текст карточки 5', 'Текст карточки 6', 'Текст карточки 7', 'Текст карточки 8'];

let textCardWisdom = ['Текст карточки 1', 'Текст карточки 2', 'Текст карточки 3', 'Текст карточки 4', 'Текст карточки 5', 'Текст карточки 6', 'Текст карточки 7', 'Текст карточки 8'];

let textCardBetrothed = ['Текст карточки 1', 'Текст карточки 2', 'Текст карточки 3', 'Текст карточки 4', 'Текст карточки 5', 'Текст карточки 6', 'Текст карточки 7', 'Текст карточки 8'];

let textCardGenus = ['Текст карточки 1', 'Текст карточки 2', 'Текст карточки 3', 'Текст карточки 4', 'Текст карточки 5', 'Текст карточки 6', 'Текст карточки 7', 'Текст карточки 8'];



let cardSigns1 = document.createElement('img');
cardSigns1.setAttribute('src', 'img/Signs/heart.png');
cardSigns1.style.width = '120px';
cardSigns1.style.margin = '20px 0';


let cardSigns2 = document.createElement('img');
cardSigns2.setAttribute('src', 'img/Signs/diadem.png');
cardSigns2.style.width = '120px';
cardSigns2.style.margin = '20px 0';

let cardSigns3 = document.createElement('img');
cardSigns3.setAttribute('src', 'img/Signs/hidden-treasures.png');
cardSigns3.style.width = '100px';
cardSigns3.style.margin = '20px 0';

let cardSigns4 = document.createElement('img');
cardSigns4.setAttribute('src', 'img/Signs/cat.png');
cardSigns4.style.width = '90px';
cardSigns4.style.margin = '20px 0';

let cardSigns5 = document.createElement('img');
cardSigns5.setAttribute('src', 'img/Signs/circle.jpeg');
cardSigns5.style.width = '130px';
cardSigns5.style.margin = '20px 0';

let cardSigns6 = document.createElement('img');
cardSigns6.setAttribute('src', 'img/Signs/key.png');
cardSigns6.style.width = '120px';
cardSigns6.style.margin = '20px 0';

let cardSigns7 = document.createElement('img');
cardSigns7.setAttribute('src', 'img/Signs/bird.png');
cardSigns7.style.width = '120px';
cardSigns7.style.margin = '0';


let cardSigns = [cardSigns1, cardSigns2, cardSigns3, '', cardSigns4, cardSigns5, cardSigns6, cardSigns7];



function dragDrop() {
  let coordY;
  let coordX;  

  const dragEl1 = document.querySelector('.drag-el-1');
  const dragEl2 = document.querySelector('.drag-el-2');
  const dragEl3 = document.querySelector('.drag-el-3');
  const dragEl4 = document.querySelector('.drag-el-4');

  dragEl1.setAttribute('draggable', 'true');
  dragEl2.setAttribute('draggable', 'true');
  dragEl3.setAttribute('draggable', 'true');
  dragEl4.setAttribute('draggable', 'true');

  dragEl1.addEventListener('dragstart', (e) => {
    coordX = e.offsetX;
    coordY = e.offsetY;
    soundDragStart()
  })

  dragEl2.addEventListener('dragstart', (e) => {
    coordX = e.offsetX;
    coordY = e.offsetY;
    soundDragStart()
  })

  dragEl3.addEventListener('dragstart', (e) => {
    coordX = e.offsetX;
    coordY = e.offsetY;
    soundDragStart()
  })

  dragEl4.addEventListener('dragstart', (e) => {
    coordX = e.offsetX;
    coordY = e.offsetY;
    soundDragStart()
  })

  dragEl1.addEventListener('dragend', (e) => {
    dragEl1.style.position = 'absolute';
    dragEl1.style.top = e.pageY + 'px';
    dragEl1.style.left = (e.pageX - 30) + 'px';
    soundDrag()
  })

  dragEl2.addEventListener('dragend', (e) => {
    dragEl2.style.position = 'absolute';
    dragEl2.style.margin = '0'; 
    dragEl2.style.top = e.pageY + 'px';
    dragEl2.style.left = (e.pageX - 30) + 'px';
    soundDrag()
  })

  dragEl3.addEventListener('dragend', (e) => {
    dragEl3.style.position = 'absolute';
    dragEl3.style.margin = '0';
    dragEl3.style.top = e.pageY + 'px';
    dragEl3.style.left = (e.pageX - 30) + 'px';
    soundDrag()
  })

  dragEl4.addEventListener('dragend', (e) => {
    dragEl4.style.position = 'absolute';
    dragEl4.style.margin = '0';
    dragEl4.style.top = e.pageY + 'px';
    dragEl4.style.left = (e.pageX - 30) + 'px';
    soundDrag()
  })
};

dragDrop();

buttonCube.addEventListener('click', function() {
  
  textCube.innerHTML = '&#8635;';
  setTimeout(() => {  textCube.innerHTML = randomCubeNumber(1, 7); }, 1000);
  soundClick();
})

function randomCubeNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min); 
}

function soundClick() {
  let audio = new Audio();
  audio.src = 'sounds/cube.mp3';
  audio.autoplay = true;
}

function soundList() {
  let audio = new Audio();
  audio.src = 'sounds/zvuk-perevorachivaniya-lista-bumagi.mp3';
  audio.autoplay = true;
}

function soundDrag() {
  let audio = new Audio();
  audio.src = 'sounds/zvuk-hoda-v-igre-odnoy-figuroy-shahmaty.mp3';
  audio.autoplay = true;
}

function soundDragStart() {
  let audio = new Audio();
  audio.src = 'sounds/knopka-vyiklyucheniya-na-nastolnoy-lampe.mp3';
  audio.autoplay = true;
}


card1.addEventListener('click', function() {
  if(card1.classList.contains('is-flipped')) {
    card1.classList.remove('is-flipped');
    soundList()
  } else {
    card1.classList.add('is-flipped');
    soundList()
    backCard1.textContent = textCardThreeR[textListCardThreeR()];
  }
})

card2.addEventListener('click', function() {
  if(card2.classList.contains('is-flipped')) {
    card2.classList.remove('is-flipped');
    soundList()
  } else {
    card2.classList.add('is-flipped');
    soundList()
    backCard2.textContent = textCardVerge[textListCardVerge()];
  }
})

card3.addEventListener('click', function() {
  if(card3.classList.contains('is-flipped')) {
    card3.classList.remove('is-flipped');
    soundList()
  } else {
    card3.classList.add('is-flipped');
    soundList()
    backCard3.textContent = textCardWisdom[textListCardWisdom()];
  }
})

card4.addEventListener('click', function() {
  if(card4.classList.contains('is-flipped')) {
    card4.classList.remove('is-flipped');
    soundList()
  } else {
    card4.classList.add('is-flipped');
    soundList()
    backCard4.textContent = textCardBetrothed[textListCardBetrothed()];
  }
})

card5.addEventListener('click', function() {
  if(card5.classList.contains('is-flipped')) {
    card5.classList.remove('is-flipped');
    soundList()
  } else {
    card5.classList.add('is-flipped');
    soundList()
    backCard5.textContent = textCardGenus[textListCardGenus()];
  }
})

card6.addEventListener('click', function() {
  if(card6.classList.contains('is-flipped')) {
    card6.classList.remove('is-flipped');
    setTimeout(() => { backCard6.innerHTML = ''; }, 1000)
    soundList()
  } else {
    card6.classList.add('is-flipped');
    soundList()
    backCard6.appendChild(cardSigns[textListCardSigns()]);
  }
})


let countCardThreeR = -1;
let countCardVerge = -1;
let countCardWisdom = -1;
let countCardBetrothed = -1;
let countCardGenus = -1;
let countCardSigns = -1;

function textListCardThreeR() {
  countCardThreeR++;
  if (countCardThreeR === textCardThreeR.length) {
    countCardThreeR = 0;
  }
  return countCardThreeR;
}

function textListCardVerge() {
  countCardVerge++;
  if (countCardVerge === textCardVerge.length) {
    countCardVerge = 0;
  }
  return countCardVerge;
}

function textListCardWisdom() {
  countCardWisdom++;
  if (countCardWisdom === textCardWisdom.length) {
    countCardWisdom = 0;
  }
  return countCardWisdom;
}

function textListCardBetrothed() {
  countCardBetrothed++;
  if (countCardBetrothed === textCardBetrothed.length) {
    countCardBetrothed = 0;
  }
  return countCardBetrothed;
}

function textListCardGenus() {
  countCardGenus++;
  if (countCardGenus === textCardBetrothed.length) {
    countCardGenus = 0;
  }
  return countCardGenus;
}

function textListCardSigns() {
  countCardSigns++;
  if (countCardSigns === cardSigns.length) {
    countCardSigns = 0;
  }
  return countCardSigns;
}


window.onbeforeunload = function() {
  return true;
};











// function shuffle(o) {
//     for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
//     return o;
// };

// var random = shuffle(numbers);

