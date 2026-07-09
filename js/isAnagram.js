/**
 * Time Complexity: O(n log n)
 */
function isAnagram(s, t) {
  const sortS = s.split("").sort();
  const sortT = t.split("").sort();

  if (JSON.stringify(sortS) === JSON.stringify(sortT)) return true;

  return false;
}

console.log(isAnagram("MELON", "LEMON"));
console.log(isAnagram("SURAT", "SUREL"));

// gemini
// O(n)
function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const count = {}; // HashMap untuk simpan frekuensi huruf

  for (let char of s) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char of t) {
    if (!count[char]) return false; // Huruf tidak ada atau jumlahnya sudah nol
    count[char]--;
  }

  return true;
}
