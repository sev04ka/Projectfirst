//получение названия файла фотографии
document.querySelector('#uploaded-file').addEventListener('change', function () {
  var splittedFakePath = this.value.split('\\');
  document.querySelector('#file-name').textContent =
    splittedFakePath[splittedFakePath.length - 1];
});

//очистка поля загрузки фотографии
document.getElementById("img-reset").onclick = function () {
  document.getElementById("uploaded-file").value = "";
  document.getElementById("file-name").textContent = "Загрузить фото товара";
}

//открытие и закрытие окна расчёта обьёма
const CapacityDialog = document.querySelector('#calc-dialog');
const CapacityBtn = document.querySelector('#count');
const CapacityClose = CapacityDialog.querySelector('#btn-close');
const CapacityOverlay = CapacityDialog.querySelector('#overlay-close');
const CapacityCalc = document.querySelector('#calculate');

function handleOpenCapacityDialog() {
  CapacityDialog.classList.add('dialog-active');
}

function handleCloseCapacityDialog() {
  CapacityDialog.classList.remove('dialog-active');
}

CapacityBtn.addEventListener('click', handleOpenCapacityDialog);
CapacityClose.addEventListener('click', handleCloseCapacityDialog);
CapacityOverlay.addEventListener('click', handleCloseCapacityDialog);
CapacityCalc.addEventListener('click', handleCloseCapacityDialog);

//открытие и закрытие окна создания заявки
const requestDialog = document.getElementById('r-dialog');
const requestBtn = document.querySelectorAll('#r-dialog-open');
const requestClose = document.getElementById('r-close-btn');
const requestOverlay = document.getElementById('r-overlay');
const requestFinish = document.getElementById('r-finish-btn');

function openRequestDialog() {
  requestDialog.classList.add('dialog-active');
}

function closeRequestDialog() {
  requestDialog.classList.remove('dialog-active');
}

requestBtn.forEach(function (btn, index) {
  btn.addEventListener('click', openRequestDialog);
})
requestClose.addEventListener('click', closeRequestDialog);
requestOverlay.addEventListener('click', closeRequestDialog);
requestFinish.addEventListener('click', closeRequestDialog);

//расчет объёма и его запись
document.getElementById("calculate").onclick = function calculation() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let num3 = Number(document.getElementById("num3").value);
  let res = num1 * num2 * num3;
  res = String(res);
  document.getElementById("capacity-field").value = res;
}

//переключение шагов расчёта стоимости доставки
const stepOneTwo = document.getElementById("fromOneToTwo");
const stepTwoOne = document.getElementById("fromTwoToOne");
const stepTwoThree = document.getElementById("fromTwoToThree");
const positionOne = document.getElementById("stepOne");
const positionTwo = document.getElementById("stepTwo");
const positionThree = document.getElementById("stepThree");

function goToStepTwo() {
  positionOne.classList.add('step-hide');
  positionTwo.classList.remove('step-hide');
}

function goToStepOne() {
  positionTwo.classList.add('step-hide');
  positionOne.classList.remove('step-hide');
}

function goToStepThree() {
  positionTwo.classList.add('step-hide');
  positionThree.classList.remove('step-hide');
}

stepOneTwo.addEventListener('click', goToStepTwo);
stepTwoOne.addEventListener('click', goToStepOne);
stepTwoThree.addEventListener('click', goToStepThree);

//Мобильное меню
const mobMenu = document.querySelector('.mob-menu');
const header = document.querySelector('.header');
const mobCont = document.querySelector('.mob-menu__cont');
const mobMenuOpen = document.querySelector('.open-mob-menu');
const mobMenuClose = document.querySelectorAll('.close-mob-menu');
const mobMenuBtn = document.querySelector('.mob-menu__btn');
const fill = document.querySelector('.filler');
const closeBtn1 = document.querySelector('#mb-1');
const closeBtn2 = document.querySelector('#mb-2');

function mmopen() {
  fill.classList.add('sync')
  header.classList.add('fixer')
  mobMenu.classList.add('mobile-menu-active')
  mobCont.classList.add('mob-menu__cont-active')
  closeBtn1.classList.add('mb')
  closeBtn2.classList.remove('mb')
}

function mmclose() {
  setTimeout(function () {
    mobMenu.classList.remove('mobile-menu-active')
    header.classList.remove('fixer')
    fill.classList.remove('sync')
  }, 250)
  mobCont.classList.remove('mob-menu__cont-active')
  closeBtn2.classList.add('mb')
  closeBtn1.classList.remove('mb')
}

mobMenuOpen.addEventListener('click', mmopen);
mobMenuClose.forEach(function (btnm, index) {
  btnm.addEventListener('click', mmclose);
});

//Первый слайдер
const sliderLine = document.querySelector('.slider__content');
const prevBtn = document.querySelector('.slprev');
const nextBtn = document.querySelector('.slnext');
const dots = document.querySelectorAll('.dotcontr');
const slides = document.querySelectorAll('.slider-item');

let position = 0;
let dotIndex = 0;
let positionstep = (100 / slides.length);

function nextSlide() {
  if (position < (slides.length - 1) * positionstep) {
    position += positionstep
    dotIndex++
  } else {
    position = 0
    dotIndex = 0
  }
  sliderLine.style.transform = 'translateX(' + -position + '%)'
  dotChange(dotIndex)
}

function prevSlide() {
  if (position > 0) {
    position -= positionstep
    dotIndex--
  } else {
    position = (slides.length - 1) * positionstep
    dotIndex = (slides.length)
  }
  sliderLine.style.transform = 'translateX(' + -position + '%)'
  dotChange(dotIndex)
}

function dotChange() {
  dots.forEach(function (dot, index) {
    dot.classList.remove('dotcontr-active')
  })
  dots[dotIndex].classList.add('dotcontr-active')
}

nextBtn.addEventListener('click', nextSlide)
prevBtn.addEventListener('click', prevSlide)
dots.forEach(function (dot, index) {
  function dotControl() {
    position = index * positionstep
    sliderLine.style.transform = 'translateX(' + -position + '%)'
    dotIndex = index
    dotChange(dotIndex)
  }
  dot.addEventListener('click', dotControl)
})

// setInterval(function () {
//   nextSlide()
// }, 3000);

//Слайдер доставки
const deliveryLine = document.querySelector('.delivery-slider__content');
const delNext = document.querySelector('.delivery-next');
const delPrev = document.querySelector('.delivery-prev');
const delDots = document.querySelectorAll('.del-dot');
const delCardsCount = document.querySelectorAll('.d-s__item');
const windowWidth = document.body.clientWidth;

let delPosition = 0;
let delDotIndex = 0;
let delPositionStep = (100 / delCardsCount.length);
let stepsCount = 0;

if (windowWidth <= 900) {
  stepsCount = (delCardsCount.length)
} else if (windowWidth <= 1350) {
  stepsCount = (delCardsCount.length - 1)
} else if (windowWidth > 1350) {
  stepsCount = (delCardsCount.length - 2)
}

function delNextSlide() {
  if (delPosition < (stepsCount - 1) * delPositionStep) {
    delPosition += delPositionStep
    delDotIndex++
  } else {
    delPosition = 0
    delDotIndex = 0
  }
  deliveryLine.style.transform = 'translateX(' + -delPosition + '%)'
  delDotChange(delDotIndex)
}

function delPrevSlide() {
  if (delPosition > 0) {
    delPosition -= delPositionStep
    delDotIndex--
  } else {
    delPosition = (stepsCount - 1) * delPositionStep
    delDotIndex = (delCardsCount.length)
  }
  deliveryLine.style.transform = 'translateX(' + -delPosition + '%)'
  delDotChange(delDotIndex)
}

function delDotChange() {
  delDots.forEach(function (dotd, index) {
    dotd.classList.remove('dotcontr-active')
  })
  delDots[delDotIndex].classList.add('dotcontr-active')
}

delNext.addEventListener('click', delNextSlide);
delPrev.addEventListener('click', delPrevSlide);
delDots.forEach(function (dotd, index) {
  function delDotControl() {
    delPosition = index * delPositionStep
    deliveryLine.style.transform = 'translateX(' + -delPosition + '%)'
    delDotIndex = index
    delDotChange(delDotIndex)
  }
  dotd.addEventListener('click', delDotControl)
})
