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
    customersEachHour: [33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33],
    cookiesEachHour: [198, 198, 198, 198, 198, 198, 198, 198, 198, 198, 198, 198, 198], 
    totalDailyCookies: 2772,

    render: function(){
    const article = document.createElement("article");
    container.appendChild(article);

    const h3 = document.createElement("h3");
    h3.textContent = this.storeName
    container.appendChild(h3);

    const ul = document.createElement("ul");
    article.appendChild(ul);


    }
}

seattle.render();