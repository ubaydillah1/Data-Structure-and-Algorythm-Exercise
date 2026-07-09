function longestConsecutive(nums) {
  const uniqueStore = new Set(nums);

  let result = 0;

  for (let num of uniqueStore) {
    let sequence = 1;

    if (uniqueStore.has(num - 1)) {
      continue;
    }

    while (true) {
      if (uniqueStore.has(num + sequence)) {
        sequence++;
        continue;
      }

      if (result < sequence) result = sequence;
      break;
    }
  }

  return result;
}

console.log(longestConsecutive([0, -1]));

// GPT
function longestConsecutive(nums) {
  const uniqueStore = new Set(nums);

  let result = 0;

  for (const num of uniqueStore) {
    // skip kalau bukan awal sequence
    if (uniqueStore.has(num - 1)) {
      continue;
    }

    let sequence = 1;

    // lanjut selama next number ada
    while (uniqueStore.has(num + sequence)) {
      sequence++;
    }

    result = Math.max(result, sequence);
  }

  return result;
}
