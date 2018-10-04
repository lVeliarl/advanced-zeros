module.exports = function getZerosCount(number, base) {

  const factors = [];

  function getPrimeFactors(remainder) {
    for (let i = 2; i <= remainder; i++) {
      while ((remainder % i) === 0) {
        factors.push(i);
        remainder /= i;
      }
    }
    return factors;
  }

  const prime = getPrimeFactors(base)[factors.length - 1];
  let count = 0;

  for (let j = prime; number / j >= 1; j *= prime) {
    count = count + Math.floor(number / j);
  }
  return count;
}
