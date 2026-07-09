function isPrimeNumber(n) {
  if (n < 2) return false;
  if (n == 2) return true;

  for (let i = 2; i < n - 1; i++) {
    if (n % i === 0) return false;
  }

  return true;
}

// BIG O = O(n)

console.log(isPrimeNumber(2));
console.log(isPrimeNumber(7));
console.log(isPrimeNumber(3));
console.log(isPrimeNumber(15));
console.log(isPrimeNumber(6));
console.log("\n=================\n");

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// Big O = O(sqrt(n))

console.log(isPrime(2));
console.log(isPrime(7));
console.log(isPrime(3));
console.log(isPrime(15));
console.log(isPrime(49));
