let priceFromUser = prompt("Enter price tag", "0") 

let priceInNumber = parseFloat(priceFromUser);

let discount = (priceInNumber * 10) / 100;

let newPrice =priceInNumber - discount;

console.log(`New price: $${newPrice}`);