// Calculates the total price for an order
function calculateTotal(items) {
  let total = 0;
  for (const item of items) {
    total += item.price * item.quantity;
  }
  return total;
}

// Applies a discount code to an order total
function applyDiscount(total, discountCode) {
  if (discountCode == "SAVE10") {
    return total - (total * 0.1);
  }
  if (discountCode == "SAVE20") {
    return total - (total * 0.2);
  }
  return total;
}

module.exports = { calculateTotal, applyDiscount };
