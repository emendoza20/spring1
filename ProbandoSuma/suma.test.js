const sum = require('./operaciones);

test('adds 1 + 3 to equal 3', () => {
  expect(sum(1, 3)).toBe(4);
});