function groupAnagrams(strs) {
  const result = [];
  let skipIndex = [];

  for (let i = 0; i < strs.length; i++) {
    const listAnagrams = [strs[i]];

    if (skipIndex.includes(i)) continue;

    for (let j = 0; j < strs.length; j++) {
      let isAnagram = true;
      if (i !== j) {
        if (strs[j].length !== strs[i].length) {
          isAnagram = false;
        }

        const count = {};

        for (let char of strs[i]) {
          count[char] = (count[char] || 0) + 1;
        }

        for (let char of strs[j]) {
          if (!count[char]) {
            isAnagram = false;
          }

          count[char]--;
        }

        if (isAnagram) {
          listAnagrams.push(strs[j]);
          skipIndex.push(j);
        }
      }
    }
    result.push(listAnagrams);
  }
  return result;
}

console.log(groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"]));
// console.log(groupAnagrams(["x"]));

// Need Code vers
function groupAnagrams(strs) {
  const map = new Map();

  for (const str of strs) {
    const sorted = str.split("").sort().join("");
    if (map.has(sorted)) {
      map.get(sorted).push(str);
    } else {
      map.set(sorted, [str]);
    }
  }
  return Array.from(map.values());
}

console.log(groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"]));

// efisien
function groupAnagrams(strs) {
  const map = new Map();

  for (const s of strs) {
    const count = new Array(26).fill(0);

    for (const c of s) {
      const index = c.charCodeAt(0) - "a".charCodeAt(0);
      count[index]++;
    }

    const key = count.join("#");

    if (!map.has(key)) {
      map.set(key, []);
    }

    map.get(key).push(s);
  }

  return Array.from(map.values());
}
