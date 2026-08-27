const cart = {
  customer: "Sam",
  items: 5,
  prices: [110, 420, 330],
};

// Destructuring
const { customer, prices } = cart;

// Rest parameter
const totalCount = (...prices) => {
  return prices.reduce((total, price) => total + price, 0);
};

// Spread operator
const total = totalCount(...prices);

console.log("Customer:", customer);
console.log("Total:", total);