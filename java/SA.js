'use strict';

Donation.all = [];
// Donation.totalHourArray = [];
Donation.storeForm = document.getElementById('donation-Form');
Donation.standsTable = document.getElementById('donortable');
Donation.allDonationRef = [];
//all are props of CoookieS
//TODO add no maximum lower than minimum if(min > max) {return alert('min must be less than max')}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function Donation(name,Amount){
  this.name = name;
  Donation.allDonationRef.push(this.name);
  this.Amount =0;
  // this.cookieSoldArray = [];
  this.cookieSoldTable = [];
  //this.sumCookieSold = 0;
  Donation.all.push(this);
  //this.randRate();
  this.createHourlyRateTable();
}


// Donation.prototype.randRate = function(){
//   for(var i = 0; i < (this.closeTime - this.openTime); i++){
//     this.cookieSoldArray.push(Math.floor(this.aveCookies * (Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers)));
//   }
//   this.cookieSoldTotal = 0;
//   for(i in this.cookieSoldArray){
//     this.cookieSoldTotal += this.cookieSoldArray[i];
//   }
//   this.cookieSoldArray.push(this.cookieSoldTotal);
// };

// Donation.prototype.createHourlyRateTable = function(){
//   this.trEl = document.createElement('tr');
//   CookieStand.standsTable.appendChild(this.trEl);
//   var locCSArray = this.cookieSoldArray.slice(0);
// this.cookieSoldArray.unshift(this.name);
// locCSArray.unshift(this.name);

//   for(var i = 0; i < locCSArray.length; i++){
//     this.tdEl = document.createElement('td');
//     this.tdEl.textContent = locCSArray[i];
//     this.trEl.appendChild(this.tdEl);
//   }
// };
//
// var makeHeaderRow = function(){
//   var hoursLocal = ['', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'];
//   var trEl = document.createElement('tr');
//   for(var i = 0; i < hoursLocal.length; i++){
//     var thEl = document.createElement('th');
//     thEl.textContent = hoursLocal[i];
//     trEl.appendChild(thEl);
//   }
//   CookieStand.standsTable.appendChild(trEl);
// };

//makeHeaderRow();

new Donation('ahmad',100);
new Donation('Mohammad',500);
new Donation('Mostaafa',1000);
// new CookieStand('Paris', 20, 38, 2.3);
// new CookieStand('Lima', 2, 16, 4.6);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//new Location function
//function to re-render table
// function renderTable(){
//   Donation.standsTable.innerHTML = null;
//   // makeHeaderRow();
//   for(var i in Donation.all){
//     Donation.all[i].createHourlyRateTable();
//   }
//   sumColumns();
// }

// // helper functions
// CookieStand.newElement = function(type, content, parent){
//   var newEl = document.createElement(type);
// };
//***
function handleLocationSubmit(event) {
  event.preventDefault();
  // form validation
  var name = event.target.name.value;
  var Amount = parseInt(event.target.Amount.value);
  // var maxCustomers = parseInt(event.target.maxCustomers.value);
  // var aveCookies = parseInt(event.target.aveCookies.value);

  if(Donation.allLocationsRef.indexOf(name) > -1){
    Donation.all[Donation.allLocationsRef.indexOf(name)].Amount = Amount;
    // CookieStand.all[CookieStand.allLocationsRef.indexOf(name)].maxCustomers = maxCustomers;
    // CookieStand.all[CookieStand.allLocationsRef.indexOf(name)].aveCookies = aveCookies;
    // CookieStand.all[CookieStand.allLocationsRef.indexOf(name)].cookieSoldArray = [];
    // CookieStand.all[CookieStand.allLocationsRef.indexOf(name)].randRate();
    renderTable();
    return;
  }

  var newDonation = new Donation(name,Amount);

  event.target.name.value = null;
  event.target.Amount.value = null;
  // event.target.maxCustomers.value = null;
  // event.target.aveCookies.value = null;
  renderTable();
}

Donation.storeForm.addEventListener('submit', handleLocationSubmit);


//end table construction adds
// var sumColumns = function(){
//   CookieStand.totalHourArray = [];
//   for(var j = -1; j < CookieStand.all[0].cookieSoldArray.length ; j++){
//     var hourTotal = 0;
//     for(var k in CookieStand.all){
//       hourTotal = hourTotal + CookieStand.all[k].cookieSoldArray[j];
//     }
//     CookieStand.totalHourArray.push(hourTotal);
//   }
//   var trEl = document.createElement('tr');
//   CookieStand.standsTable.appendChild(trEl);
//   for (var i in CookieStand.totalHourArray){
//     var tdEl = document.createElement('td');
//     if(i == 0){
//       tdEl.textContent = 'Total';
//     }else{
//       tdEl.textContent = CookieStand.totalHourArray[i];
//     }
//     trEl.appendChild(tdEl);
//   }
// };
// sumColumns();
