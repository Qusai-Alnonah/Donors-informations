'use strict';

let arrofDonation =[];
let donarTable = document.getElementById('donortable');

function Donation(name , Amount){
  this.name=name;
  this.Age = randomGenerator();
  this.Amount=Amount;
  this.tableInfo =[];
  this.tableInfo.push(this.name);
  this.tableInfo.push(this.Age);
  this.tableInfo.push(this.Amount);
  arrofDonation.push(this);
}

function randomGenerator(){
  return Math.floor(Math.random() *13 +18);

}

getFormLs();
renderTable();

let form =document.getElementById('donationForm');
form.addEventListener('submit',handleDonrationSubmit);

function handleDonrationSubmit(event){
  event.preventDefault();
  let name =event.target.name.value;
  let Amount = parseInt (event.target.Amount.value);
  let newDonation =new Donation(name,Amount);
  newDonation.renderDonation();
  saveToLs();
}

Donation.prototype.renderDonation =function(){
  donarTable.deleteRow(-1);
  let tableRow = document.createElement('tr');
  donarTable.appendChild(tableRow);
  let tdEl;
  for(let i =0;i<this.tableInfo.length;i++){
    tdEl =document.createElement('td');
    tableRow.appendChild(tdEl);
    tdEl.textContent =this.tableInfo[i];
  }
  let lastTableRow =document.createElement('tr');
  donarTable.appendChild(lastTableRow);


};

function saveToLs(){
  // eslint-disable-next-line no-unused-vars
  let storageArr = JSON.stringify(arrofDonation);
  localStorage.setItem('donationInfo',storageArr);
}



function getFormLs(){
  let getArr =JSON.parse(localStorage.getItem('donationInfo'));
  if(getArr){
    arrofDonation =getArr;
  }
}

function renderTable(){
  for(let j =0 ; j<arrofDonation.length;j++){
    let tableRow =document.createElement('tr');
    donarTable.appendChild(tableRow);
    let tdEl;
    for(let i =0 ;i<arrofDonation[j].tableInfo.length;i++){
      tdEl =document.createElement('td');
      tableRow.appendChild(tdEl);
      tdEl.textContent =arrofDonation[j].tableInfo[i];

    }
  }

}

// let lastTableRow =document.createElement('tr');
// donarTable.appendChild(lastTableRow);


