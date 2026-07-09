// Pelajari lagi
function longestSubstring(str) {
  let left = 0;
  let max = 0;

  const set = new Set();

  for (let right = 0; right < str.length; right++) {
    // kalau duplicate, geser left
    while (set.has(str[right])) {
      set.delete(str[left]);
      left++;
    }

    // tambah char baru ke window
    set.add(str[right]);

    // hitung panjang window sekarang
    max = Math.max(max, right - left + 1);

    console.log({
      left,
      right,
      window: str.slice(left, right + 1),
      max,
    });
  }

  return max;
}

console.log(longestSubstring("pwwkew"));

function longestSubstring(str) {
  const map = new Map(); // char -> index terakhir
  let left = 0;
  let result = 0;

  for (let right = 0; right < str.length; right++) {
    const char = str[right];

    if (map.has(char)) {
      left = Math.max(left, map.get(char) + 1); // loncat langsung
    }

    map.set(char, right); // update index terakhir
    result = Math.max(result, right - left + 1);
  }

  return result;
}
