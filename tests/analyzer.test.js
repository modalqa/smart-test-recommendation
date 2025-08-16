const { extractChangedFunctions } = require('../src/core/analyzer');

test('extractChangedFunctions detects function lines', () => {
  const diff = '+function test() {}\n+console.log("hello");';
  const result = extractChangedFunctions(diff);
  expect(result).toEqual(['+function test() {}']);
});
