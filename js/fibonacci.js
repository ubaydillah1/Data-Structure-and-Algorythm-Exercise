// me stupid

function fibonacci(n) {
  if (n < 2) return [0];

  let array = [0, 1];

  for (let i = 2; i < n; i++) {
    const before = array[array.length - 2];
    const current = array[array.length - 1];

    array.push(before + current);
  }

  return array;
}

console.log("Iteratif:", fibonacci(10));

// video
function fibonacciVideo(n) {
  let fib = [0, 1];

  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib;
}

console.log("Iteratif Video:", fibonacci(10));

// AI
// --- VERSI REKURSI (Standard / Slow) ---
// O(2^n) - Sangat lambat untuk n besar karena menghitung ulang angka yang sama
function fibonacciRecursive(n) {
  if (n <= 1) return n;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// Untuk mendapatkan array yang sama dengan versi iteratif kamu:
function getFibArray(n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(fibonacciRecursive(i));
  }
  return result;
}

console.log("Rekursif Biasa (Array):", getFibArray(10));

// --- VERSI REKURSI + MEMOIZATION (Optimized) ---
// O(n) - Cepat karena menyimpan hasil yang sudah dihitung
function fibonacciMemo(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;

  memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
  return memo[n];
}

console.log("Rekursif Memoization (n=10):", fibonacciMemo(10));
