//budget logic (using excel budgeter as example)
//paid every 3months(i.e, 90 days)
let days = 90
let initialAmountPaid = 1448.90
//SAVINGS
let savingsAmount = Math.round((initialAmountPaid*0.10)*100)/100
let studentLoansAmount = Math.round((initialAmountPaid*0.10)*100)/100
//pay about $100/month 100/30
let creditCardAmount = 3.33*days
    //spotify premium is 12.10/mo, so 12.10/30 days, so about 0.41 dollars/day
let spotifyAmount = 0.40*days;
//SPENDING
let leftToSpend = initialAmountPaid-savingsAmount-studentLoansAmount-creditCardAmount-spotifyAmount;
console.log(leftToSpend);


//DOM manipulation
let container = document.querySelector(".container")
let initialDiv = document.createElement("div");
initialDiv.textContent = "Amount Paid: " + initialAmountPaid;
container.append(initialDiv)
let savingsDiv = document.createElement("div");
savingsDiv.textContent = "Amount to Save: " + savingsAmount;
container.append(savingsDiv);









