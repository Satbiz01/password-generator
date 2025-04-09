let pastext = document.querySelector('.password-text')
let pasbut = document.querySelector('.password-button')
let range = document.querySelector('.check')
let value = document.querySelector('.range-value');
let upperC = document.querySelector('.upper')
let lowerC = document.querySelector('.lower')
let sym = document.querySelector('.symbols')
let num = document.querySelector('.numbers')
let customBTN = document.querySelector('.password-button-custom')
let showBTN = document.querySelector('.password-button-copy')
let PLRopt = document.querySelector('.PLR-option')
let backARROW = document.querySelector('.back-arrow-img');
let range_custom = document.querySelector('.check-custom')  // Объявляем переменную для второго диапазона
let value_custom = document.querySelector('.range-value-custom')  // Объявляем переменную для значения второго диапазона
let pastextC = document.querySelector('.password-text-custom')
let cont = document.querySelector('.third-container')
let contnd = document.querySelector('.second-container')

/* basic part of password generator */
function generateBASIC() {
  let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!"№;%:?*()_+-='
  let password = ''
  let length = range.value
  
  for (let i = 0; i < length; i++) {
    let index = randomIND(chars.length)
    password += chars[index];
  }
  return password
}
/* end of basic part of password generator */

customBTN.addEventListener('click', () => {
  let passwordPLR = generatorPLR();
  pastextC.innerHTML = passwordPLR;
  console.log('test console') 
})

pasbut.addEventListener('click', () => {
  let password = generateBASIC();
  pastext.innerHTML = password;
  console.log('test console') 
})

function generatorPLR() {
  let length = range_custom.value;  // Используем правильное свойство для значения диапазона
  let symbols = '!"§$%&/()=?';
  let lower = 'abcdefghijklmnopqrstuvwxyz'
  let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let numbers = '0123456789'
  let passwordPLR = ''
  let chars = ''

  if (lowerC.checked) chars += lower;
  if (upperC.checked) chars += upper;
  if (sym.checked) chars += symbols;
  if (num.checked) chars += numbers;

  if (chars == '') {
    let warning = 'Для создания кастомного пароля требуется выбрать минимум 1 параметр!'
    return warning
  }
  
  for (let i = 0; i < length; i++) {
    let index = randomIND(chars.length)
    passwordPLR += chars[index];
  }
  return passwordPLR
} 

/* random index */
function randomIND(max) {
  return Math.floor(Math.random() * max);
}

/* password length */
range.addEventListener('input', () => {
  value.innerText = range.value;
});

range_custom.addEventListener('input', () => {
  value_custom.innerText = range_custom.value;  // Обновляем значение для второго диапазона
});

showBTN.addEventListener('click', () => {
  cont.style.display = 'block'
  contnd.style.display = 'none'
})
backARROW.addEventListener('click', ()=>{
   cont.style.display = 'none'
  contnd.style.display = 'block'
})