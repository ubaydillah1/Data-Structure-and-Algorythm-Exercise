// Big O(n^2)

function bubbleSort(arr) {
  let isContinue = false;

  do {
    isContinue = false;

    for (let i = 1; i < arr.length; i++) {
      const left = i - 1;
      const right = i;

      if (arr[left] > arr[right]) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        isContinue = true;
      }
    }
  } while (isContinue);

  return arr;
}

console.log(bubbleSort([10, 2, 5, 3, 1]));
