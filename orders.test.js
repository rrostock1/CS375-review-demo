const { calculateTotal } = require('./orders');
//test comment
test('calculates total for multiple items', () => {
  const items = [
    { price: 10, quantity: 2 },
    { price: 5,  quantity: 3 },
  ];
  expect(calculateTotal(items)).toBe(35);
});

test('returns 0 for empty order', () => {
  expect(calculateTotal([])).toBe(0);
});
