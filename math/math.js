// Build a Car class!

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function average() {
  const arr = [1, 2, 3];
  const arrSum = arr.reduce((a, b) => a + b);
  return arrSum / arr.length;
}

module.exports = {
  add,
  multiply,
  average,
};
