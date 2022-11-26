document.querySelector('#uploaded-file').addEventListener('change', function () {
  var splittedFakePath = this.value.split('\\');
  document.querySelector('#file-name').textContent =
    splittedFakePath[splittedFakePath.length - 1];
});

document.getElementById("img-reset").onclick = function () {
  document.getElementById("uploaded-file").value = "";
  document.getElementById("file-name").textContent = "Загрузить фото товара";
}

const callRequestDialog = document.querySelector('#calc-dialog');
const callRequestBtn = document.querySelector('#count');
const callRequestClose = callRequestDialog.querySelector('#btn-close');
const callRequestOverlay = callRequestDialog.querySelector('#overlay-close');
const callRequestCalc = document.querySelector('#calculate');

function handleOpenRequestDialog() {
  callRequestDialog.classList.add('capacity-dialog-active');
}

function handleCloseRequestDialog() {
  callRequestDialog.classList.remove('capacity-dialog-active');
}

callRequestBtn.addEventListener('click', handleOpenRequestDialog);
callRequestClose.addEventListener('click', handleCloseRequestDialog);
callRequestOverlay.addEventListener('click', handleCloseRequestDialog);
callRequestCalc.addEventListener('click', handleCloseRequestDialog);

document.getElementById("calculate").onclick = function calculation() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let num3 = Number(document.getElementById("num3").value);
  let res = num1 * num2 * num3;
  res = String(res);
  document.getElementById("capacity-field").value = res;
}



