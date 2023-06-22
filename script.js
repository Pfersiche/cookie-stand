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
   // this.calculateCookiesPerHour();
}

Location.prototype.calculateCustPerHour = function () {
for (let i = 0; i < hours.length; i++) {
    this.custPerHour.push(randomNum(this.minCust, this.maxCust));
    }
    console.log(this.custPerHour)

};

Location.prototype.cookiesPerHour = function () {
    for (let i = 0; i < hours.length; i++) {
    const cookies = Math.ceil(this.custPerHour[i] * this.avgCookiesPerHour);    
    this.cookiesPerHour.push(cookies);
    //this.totalCookies += cookies;
}
console.log(this.CookiesPerHour);
};

Location.prototype.render = function () {
    console.log("render working")
    this.calculateCustPerHour();
    this.cookiesPerHour();

const table = document.getElementById("myTable");

const tr = document.getElementById("tr");
table.appendChild(tr);

let td = document.createElement("td");
td.textContent = this.name
tr.appendChild(td)

total = total + this.cookiesPerHour[i]



}


const seattle = new Location("seattle", 23, 65, 6.3)

seattle.render();

console.log(seattle)

