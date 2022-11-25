/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const feet = 3.281
const gallon = 0.264
const pound = 2.204

const btnConverter = document.getElementById('btn-converter')

btnConverter.addEventListener('click', function(){
   let userInput = document.getElementById('user-input').value 
   length(userInput)
   volume(userInput)
   mass(userInput)
})

function length(num){
    let p = document.querySelector("#length p")
    let f = (num*feet).toFixed(3)
    let m = (num/feet).toFixed(3)
    p.innerHTML = `${num} meters = ${f} feet | ${num} feet = ${m} meters`
}

function volume(num){
    let p = document.querySelector("#volume p")
    let g = (num*gallon).toFixed(3)
    let l = (num/gallon).toFixed(3)
    p.innerHTML = `${num} liters = ${g} gallons | ${num} gallons = ${l} liters`
}

function mass(num){
    let p = document.querySelector("#mass p")
    let po = (num*pound).toFixed(3)
    let k = (num/pound).toFixed(3)
    p.innerHTML = `${num} kilos = ${po} pounds | ${num} pounds = ${k} kilos`
}