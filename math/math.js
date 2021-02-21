// Build a Car class!

function add(...args) {
  if (!args) {
    return 0;
  } else {
    return args.reduce((a, b) => {
      return a + b;
    }, 0);
  }
}

function multiply(a, b) {
  if (a && b) {
    return a * b;
  }
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
