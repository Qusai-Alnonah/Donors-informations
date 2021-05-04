'use stricr';
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function Donation(name,age,amount){
  this.name =name;
  this.amount =amount;
  this.age= 0;
}

let firstDonor = new Donation('Ahmad','20','100');
