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
const requestBtn = document.getElementById('r-dialog-open');
const requestBtn1 = document.getElementById('r-dialog-open1');
const requestBtn2 = document.getElementById('r-dialog-open2');
const requestBtn3 = document.getElementById('r-dialog-open3');
const requestBtn4 = document.getElementById('r-dialog-open4');
const requestBtn5 = document.getElementById('r-dialog-open5');
const requestClose = document.getElementById('r-close-btn');
const requestOverlay = document.getElementById('r-overlay');
const requestFinish = document.getElementById('r-finish-btn');

function openRequestDialog() {
  requestDialog.classList.add('dialog-active');
}

function closeRequestDialog() {
  requestDialog.classList.remove('dialog-active');
}

requestBtn.addEventListener('click', openRequestDialog);
requestBtn1.addEventListener('click', openRequestDialog);
requestBtn2.addEventListener('click', openRequestDialog);
requestBtn3.addEventListener('click', openRequestDialog);
requestBtn4.addEventListener('click', openRequestDialog);
requestBtn5.addEventListener('click', openRequestDialog);
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
