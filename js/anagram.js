// O(n)
function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const count = {};

  for (let char of s) {
    count[char] ? count[char]++ : (count[char] = 1);
  }

  for (let char of t) {
    if (!count[char]) return false;
    count[char]--;
  }

  return true;
}

// console.log(isAnagram("racecar", "carrace"));

// O(n^2)
function isAnagram(s, t) {
  const sortS = s.split("").sort();
  const sortT = t.split("").sort();

  if (JSON.stringify(sortS) === JSON.stringify(sortT)) return true;

  return false;
}

// Day 2
function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const count = new Map();

  for (let char of s) {
    count.set(char, (count.get(char) || 0) + 1);
  }

  for (let char of t) {
    if (!count.has(char)) return false;

    count.set(char, count.get(char) - 1);

    if (count.get(char) < 0) return false;
  }

  return true;
}

console.log(isAnagram("melon", "lemon"));
