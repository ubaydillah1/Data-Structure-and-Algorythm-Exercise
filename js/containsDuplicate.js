/**
 * Time Complexity: O(n^2) - Nested loops iterate over the array.
 */
function hasDuplicate(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        if (nums[i] === nums[j]) {
          return true;
        }
      }
    }
  }

  return false;
}

console.log(hasDuplicate([1, 2, 3, 4, 5]));
console.log(hasDuplicate([1, 2, 3, 3, 4, 5]));

// Gemini
function hasDuplicate(nums) {
  const seen = new Set(); // Ini memori tambahan (Space O(n))
  for (const n of nums) {
    if (seen.has(n)) return true; // Cek Set cuma O(1) - Instant!
    seen.add(n);
  }
  return false;
}
