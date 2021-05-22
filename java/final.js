'use strict';
function randomGenerator(){
  return Math.floor(Math.random() *13 +18);

}
let arrofDonation =[];
let donarTable = document.getElementById('donortable');
let total =0;

function Donation(Name , Amount){
  this.Name=Name;
  this.Age = randomGenerator();
  this.Amount=Amount;
  this.tableInfo =[];
  this.tableInfo.push(this.Name);
  this.tableInfo.push(this.Age);
  this.tableInfo.push(this.Amount);
  arrofDonation.push(this);
}

getFormLs();
renderTable();

let form =document.getElementById('donationForm');
form.addEventListener('submit',handleDonrationSubmit);
function handleDonrationSubmit(event){
  event.preventDefault();
  let Name =event.target.Name.value;
  let Amount = parseInt (event.target.Amount.value);
  let newDonation =new Donation(Name,Amount);
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
  total += parseInt(this.tableInfo[2]);
  let lastTableRow =document.createElement('tr');
  donarTable.appendChild(lastTableRow);
  let totalTd =document.createElement('td');
  lastTableRow.appendChild(totalTd);
  totalTd.setAttribute('id','totalCell');
  totalTd.setAttribute('colspan','3');
  totalTd.textContent =`Total: ${total}`;


};

function saveToLs(){

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
      if(i === arrofDonation[j].tableInfo.length-1){
        total += parseInt(arrofDonation[j].tableInfo[i]);
      }
    }
  }
  console.log(total);
  let lastTableRow =document.createElement('tr');
  donarTable.appendChild(lastTableRow);
  let totalTd =document.createElement('td');
  lastTableRow.appendChild(totalTd);
  totalTd.setAttribute('colspan','3');
  totalTd.textContent =`Total: ${total};`;
}
