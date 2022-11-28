//const sum = require('./operaciones);
const { sum, subtract, multi, divi } = require("../app/operaciones");


test('adds 1 + 3 to equal 3', () => {
  expect(sum(1, 3)).toBe(4);
});