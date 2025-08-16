const { extractChangedFunctions } = require('../src/core/analyzer');

test('extractChangedFunctions detects simple function declaration', () => {
  const diff = '+function test() {}\n+console.log("hello");';
  const result = extractChangedFunctions(diff);
  expect(result).toEqual(['+function test() {}']);
});

test('extractChangedFunctions detects arrow function', () => {
  const diff = '+const sayHello = () => {\n+  console.log("Hi");\n+}';
  const result = extractChangedFunctions(diff);
  expect(result).toEqual(['+const sayHello = () => {']);
});

test('extractChangedFunctions detects function expression', () => {
  const diff = '+const sum = function(a, b) {\n+  return a + b;\n+}';
  const result = extractChangedFunctions(diff);
  expect(result).toEqual(['+const sum = function(a, b) {']);
});

test('extractChangedFunctions ignores non-function lines', () => {
  const diff = '+let x = 10;\n+console.log("Not a function");';
  const result = extractChangedFunctions(diff);
  expect(result).toEqual([]);
});

test('extractChangedFunctions handles multiple functions', () => {
  const diff = `
+function one() {}
+const two = function() {};
+const three = () => {};
  `;
  const result = extractChangedFunctions(diff);
  expect(result).toEqual([
    '+function one() {}',
    '+const two = function() {};',
    '+const three = () => {};'
  ]);
});
