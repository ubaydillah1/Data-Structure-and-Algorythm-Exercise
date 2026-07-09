function factorial(n) {
  let result = 1;

  for (let i = 1; i < n + 1; i++) {
    result *= i;
  }

  console.log(result);
  return result;
}

// Big O(n)

factorial(4); // 24
factorial(5); // 120

function factorialRecursive(n) {
  if (n === 0) return 1;

  return n * factorialRecursive(n - 1);
}
// Big O(n)

console.log(factorialRecursive(4)); // 24
console.log(factorialRecursive(5)); // 120

////////////////////////
