/* eslint-disable no-unused-vars */
'use strict';
const donors =document.getElementById('donors');
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

let contanerAll =document.getElementById('contaner');
var arrOfobiects=[];
function Donation(name,amount){
  this.name =name;
  this.amount =amount;
  this.age= 0;
  this.newArr=[];
  arrOfobiects.push(this);
//   saveTols();
}

new Donation('Ahmad','100');
new Donation('Mohammad','500');
new Donation('Mostafa','1000');

Donation.prototype.getAge =
function genrateAge(){
  this.age = getRandomIntInclusive(18,30);
};



function renderTable (){
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
}
Donation.donationform =document.getElementById('donationform');
Donation.all=[];
Donation.allDonationRef=[];
function handleDonationSubmit(event){
  event.preventDefault();
  let name =event.target.name.value;
  let amount = parseInt(event.target.amount.value);
  if(Donation.allDonationRef.indexOf(name)>-1){
    Donation.all[Donation.allDonationRef.indexOf(name)].amount= amount;
    renderTable();
    return;
  }
  var newDonation =new Donation(name,amount);

  event.target.name.value =null;
  event.target.amount.value =null;
  renderTable();
}
// Donation.donationform.addEventListener('submit',handleDonationSubmit);
// Donation.Amount=[];
// const form =document.getElementById('donation-form');
// form.addEventListener('submit',handleSubmitting);

// function handleSubmitting(event){
//   event.preventDefault();
//   let newDonorName =event.target.nameField.value;
//   let Amount =event.target.AmountFiled.value;
//   let newDonor = new Donation(newDonorName,Amount);
//   newDonor. getAge();
//   newDonor.renderTable();
// }
// function saveTols(){
//   let arrStr=JSON.stringify(Donation.Amount);
//   localStorage.setItem('donorSaved',arrStr);
// }
// function gettingDonortionFormLs(){
//   // to do not have null order []
//   let data = localStorage.getItem('donorSaved');//||"[]"
//   Donation.Amount= donors;
//   if(donors !== null){
//     renderTabledonor();
//   }
// }
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
// for(let i =0;i<arrOfobiects.length;i++){
//   arrOfobiects[i].getAge();
//   arrOfobiects[i].renderTable();
// }
