function isPowerOfTwo(n) {
  if (n < 2) return false;

  for (let i = n; i > 2; i = i / 2) {
    if (i % 2 !== 0) return false;
  }

  return true;
}

console.log(isPowerOfTwo(50));
console.log(isPowerOfTwo(32));
console.log(isPowerOfTwo(64));
console.log(isPowerOfTwo(4));
console.log(isPowerOfTwo(2.2));
