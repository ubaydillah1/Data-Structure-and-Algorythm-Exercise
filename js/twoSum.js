/**
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        if (nums[i] + nums[j] === target) return [i, j];
      }
    }
  }
}

console.log(twoSum([3, 4, 5, 6], 7));
console.log(twoSum([4, 5, 6], 10));

// gemini
function twoSum(nums, target) {
  const prevMap = new Map(); // val : index
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];

    if (prevMap.has(diff)) return [prevMap.get(diff), i];
    prevMap.set(nums[i], i);
  }
}
