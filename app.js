/* eslint-disable no-unused-vars */
'use strict';
let arrOfobiects=[];
let newDonaration=[];
const donors =document.getElementById('donors');
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function genrateAge(){
  this.age = getRandomIntInclusive(18,30);
}
const arrOfDonars=[];
function Donation(name,amount){
  this.name=name;
  this.amount=amount;
  this.age=genrateAge();
  this.newDonaration=[];
  this.newDonaration.push(this.name);
  this.newDonaration.push(this.age);
  this.newDonaration.push(this.amount);
  arrOfDonars.push(this);
  console.log(newDonation);
  saveTols();
}


// var arrOfobiects=[];
// let arrOfname=[];
// let arrOfage=[];
// let arrOfamount=[];
// function Donation(name,amount){
//   this.name =name;
//   this.amount =amount;
//   this.age= 0;
//   this.newArr=[];
//   arrOfobiects.push(this);


// }

new Donation('Ahmad','100');
new Donation('Mohammad','500');
new Donation('Mostafa','1000');


Donation.Amount=[];
const form =document.getElementById('donation-Form');
form.addEventListener('Submit',handleSubmitting);

function handleSubmitting(event){
  event.preventDefault();
  let newDonorName =event.target.nameField.value;
  let amount =event.target.amountFiled.value;
  let newDonor = new Donation(newDonorName,amount);
  newDonor. getAge();
  newDonor.renderTable();
  saveTols();
}


let contanerAll =document.getElementById('contaner');
Donation.prototype.renderTable = function (){
  let donortable = document.createElement('table');
  contanerAll.appendChild(donortable);
  let tr =document.createElement('tr');
  donortable.appendChild(tr);
  tr.textContent = 'Donor Name';
  let th =document.createElement('th');
  tr.appendChild(th);
  th.textContent ='Donor Age';
  let th1 =document.createElement('th');
  tr.appendChild(th1);
  th1.textContent = 'Amount';
  for(let i =0; i<1;i++){
    let tr1=document.createElement('tr');
    donortable.appendChild(tr1);
    tr1.textContent = this.name;
    let th2 =document.createElement('th');
    tr1.appendChild(th2);
    th2.textContent = this.age;
    let th3=document.createElement('th');
    tr1.appendChild(th3);
    th3.textContent = this.amount;
  }
};
function saveTols(){
  let arrStr=JSON.stringify(Donation.Amount);
  localStorage.setItem('donorSaved',arrStr);
}
function gettingDonortionFormLs(){
  // to do not have null order []
  let data = localStorage.getItem('donorSaved');//||"[]"
  Donation.Amount= donors;
  if(donors !== null){
    renderTabledonor();
  }
}
function renderTabledonor(){
  donors.textContent =' ';
  for(let i =0;i<Donation.Amount.length;i++){
    const AmountLI =document.createElement('li');
    const infoP =document.createElement('p');
    infoP.textContent =`${Donation.Amount[i].name} `;
    AmountLI.appendChild(infoP);
    donors.appendChild(AmountLI);
  }
}
for(let i =0;i<arrOfobiects.length;i++){
  arrOfobiects[i].getAge();
  arrOfobiects[i].renderTable();
}

const newone = document.getElementById('');
newone.addEventListener('submit',function(event){
  event.preventDefault();
  const donarName =event.target.name.value;
  const Amount = parseInt(event.target.Amount.value);
  const donation =new Donation(name,Amount);
  donation.renderTable();

});
