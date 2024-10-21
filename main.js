let priceFromUser1st = prompt("Enter price tag", "0");

let priceFromUser2nd = priceFromUser1st.slice(1);

let priceInNumber = parseFloat(priceFromUser);

let discount = (priceInNumber * 10) / 100;

let newPrice =priceInNumber - discount;

console.log(`New price: $${newPrice}`);