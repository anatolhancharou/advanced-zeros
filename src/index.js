module.exports = function getZerosCount(number, base) {
  // your implementation
  var primeNumbers = [];

  primeNumberSearch:
  for (var i = 2; i <= base; i++) {
    for (var j = 2; j < i; j++) {
      if (i % j === 0) continue primeNumberSearch;
    }
    primeNumbers.push(i);
  }
  
  var basePrimeFactors = [];
    
  for (i = 0; i < primeNumbers.length; i++) {
    if (base % primeNumbers[i] === 0) {
      basePrimeFactors.push(primeNumbers[i]);
      base = base / primeNumbers[i];
      i--;
    }
  }

  var primePowerStore = {};
  var n;
  
  for (i = 0; i < basePrimeFactors.length; i++) {
    n = basePrimeFactors[i];
    if (primePowerStore[n] !== undefined) {
      primePowerStore[n] += 1;
    } else {
      primePowerStore[n] = 1;
    }
  }

  var keyNumbers = [];

  for (var key in primePowerStore) {
    keyNumbers.push(key);
  }

  var count = 0;
  
  for (i = 0; i < keyNumbers.length; i++) {
    n = keyNumbers[i];
    while (n <= number) {
      count += Math.floor(number / n);
      n *= keyNumbers[i];
    }
    count = Math.floor(count / primePowerStore[keyNumbers[i]]);
    keyNumbers[i] = count;
    count = 0;
  }

  return keyNumbers.sort((a, b) => a - b)[0];
}
