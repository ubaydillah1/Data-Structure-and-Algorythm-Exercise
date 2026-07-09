function topKFrequent(nums, k) {
  const count = new Map();

  for (let char of nums) {
    count.set(char, (count.get(char) || 0) + 1);
  }

  const sortedCount = [...count.entries()].sort((a, b) => b[1] - a[1]);
  const result = [];

  for (let [key, value] of sortedCount) {
    if (result.length >= k) break;

    result.push(key);
  }

  return result;
}

// console.log(topKFrequent([1, 2, 2, 3, 3, 3], 2));

// efisien
function topKFrequent(nums, k) {
  const count = new Map();
  const bucket = Array.from({ length: nums.length + 1 }, () => []);

  for (let char of nums) {
    count.set(char, (count.get(char) || 0) + 1);
  }

  for (let [key, frek] of count) {
    bucket[frek].push(key);
  }

  const result = [];

  for (let i = bucket.length - 1; i > 0; i--) {
    if (bucket[i].length > 0) {
      for (let num of bucket[i]) {
        result.push(num);
        if (result.length === k) return result;
      }
    }
  }
}

// console.log(topKFrequent([1, 2, 2, 3, 3, 3], 2));

// day 2
function topKFrequent(nums, k) {
  const count = new Map();
  const bucket = Array.from({ length: nums.length + 1 }, () => []);

  for (let char of nums) {
    count.set(char, (count.get(char) || 0) + 1);
  }

  for (let [key, value] of count) {
    bucket[value].push(key);
  }

  const result = [];

  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i].length > 0) {
      for (let char of bucket[i]) {
        result.push(char);
        if (result.length === k) return result;
      }
    }
  }

  return result;
}

console.log(topKFrequent([1, 2, 2, 3, 3, 3, 4], 3));
