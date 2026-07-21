// Base Case O(n log n)
// Worst Case O(n ^n)

function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1];

  let leftArray = [];
  let righArray = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= pivot) {
      righArray.push(arr[i]);
    } else {
      leftArray.push(arr[i]);
    }
  }

  return [...quickSort(leftArray), pivot, ...quickSort(righArray)];
}

console.log(quickSort([-6, 20, 4, 3, 3, 2]));
