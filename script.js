'use strict';

//console.log("hello")

const hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm"
, "4pm", "5pm", "6pm", "7pm"];

function randomNum(min, max){
    return Math.floor(Math.random() * max - min + 1 + min)
}

function Location(storeName, minCust, maxCust, avgCookiesPerHour){
    this.storeName = storeName;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookiesPerHour = avgCookiesPerHour;
    this.custPerHour = [];
    this.cookiesPerHour = []; 
    this.totalCookies = 0;
    this.pushStore();
    this.render();
   // this.calculateCookiesPerHour();
}

Location.prototype.calculateCustPerHour = function () {
for (let i = 0; i < hours.length; i++) {
    this.custPerHour.push(randomNum(this.minCust, this.maxCust));
    }
    console.log(this.custPerHour)

};

Location.prototype.calculateCookiesPerHour = function () {
    for (let i = 0; i < hours.length; i++) {
    let oneHour = Math.ceil(this.custPerHour[i] * this.avgCookiesPerHour);    
    this.cookiesPerHour.push(oneHour);
    this.totalCookies += oneHour;
}
console.log(this.cookiesPerHour);
};

Location.prototype.render = function () {
    console.log("render working")
    this.calculateCustPerHour();
    this.calculateCookiesPerHour();

const table = document.getElementById("myTable");

myTable.appendChild();

const tr = document.getElementById("tr");
const th = document.createElement("th");
table.appendChild(th);

for (let i = 0; i < hours.length; i++) {
    const td = document.createElement("td");
    td.textContent = this.cookiesPerHour[i];
    tr.appendChild(td);
  }

  const storeTotal = document.createElement("th");
  storeTotal.textContent = this.totalDailyCookies;
  tr.appendChild(storeTotal);

storeTable.appendChild(tr);

total = total + this.cookiesPerHour[i];

};

function hoursRow() {
    const tr = document.createElement("tr");
    const th = document.createElement("th")
    th.textContent ="Store Location";
    tr.appendChild(th);

for (let i = 0; i < hours.length; i++){
    const th = document.createElement("th")
    th.textContent = hours [i];
    tr.appendChild(th);

    const storeTotalsHeaderCell = document.createElement("th");
    storeTotalsHeaderCell.textContent = "Store Totals";
    tr.appendChild(storeTotalsHeaderCell);
    storeTable.appendChild(tr);
  }

hoursRow();

    const seattle = new CookieStore("seattle", 23, 65, 6.3);
    const tokyo = new CookieStore("tokyo", 3, 24, 1.2);
    const dubai = new CookieStore("dubai", 11, 38, 2.3);
    const paris = new CookieStore("paris", 20, 38, 2.3);
    const lima = new CookieStore("lima", 2, 16, 4.6);

    const allStores = [seattle, tokyo, dubai, paris, lima];

 for (let i = 0; i < allStores.length; i++) {


 } 

function hourlyTotals() {
    const tr = document.createElement("tr");
    const th = document.createElement("th")
    th.textContent = "Hourly Totals";
    tr.appendChild(th);

    for (let i = 0; i < hours.length; i++){
        const th = document.createElement("th")
        let hoursAdded = 0;
        for (let j = 0; j < allStores.length; j++) {
        const hourAmount = allStores[j].cookiesPerHour[i];
        hoursAdded += hourAmount;
        }
        th.textContent = hoursAdded
        tr.appendChild(th);
}

let totalTotals = 0;
for (let i = 0; i < allStores.length; i++) {
totalTotals += allStores[i].totalDailyCookies;

}

const totalsCell = document.createElement ("th")
totalsCell.textcontent = totalTotals;
tr.appendChild(totalsCell);

storeTable.appendChild(tr);
}
hourlyTotals();

for (let k = 0; < newStoreForm.length; k++){
    
}




const store = new CookieStore(storeNameInput, minCustInput, maxCustInput, avgCookiesInput);

hourlyTotals();
newStoreForm.reset();
};

