'use strict';
console.log("salmon cookies");

const container = document.getElementById("container");

const hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm"
, "4pm", "5pm", "6pm", "7pm"];

console.log(hours.length);

const seattle = {
    storeName: "seattle",
    minCustPerHour: 25,
    maxCustPerHour: 65,
    avgCookiesPerCust: 6.3,
    customersEachHour: [],
    cookiesEachHour: [], 
    totalDailyCookies: 0,
    calcCustomersEachHour: function () {
        for (let i = 0 ; i < hours.length; i++) {
this.customersEachHour.push(randomNum(this.minCustPerHour , this.maxCustPerHour));
        }
    },
    calcCookiesEachHour: function () {
      for (let i = 0; i < hours.length; i++) {
        const oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerHour);
        this.cookiesEachHour.push(oneHour);
        this.totalDailyCookies += oneHour;
      }
    },
    render: function(){
    const article = document.createElement("article");
    container.appendChild(article);

    const h3 = document.createElement("h3");
    h3.textContent = this.storeName
    container.appendChild(h3);

    const ul = document.createElement("ul");
    article.appendChild(ul);

    for (let i = 0; i < hours.length; i++) {
        const li = document.createElement("li");
        li.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`;
        ul.appendChild(li);
      }
      const li = document.createElement("li");
      li.textContent = `Total Cookies: ${this.totalDailyCookies}`;
      ul.appendChild(li);
    },
  };
  
  
