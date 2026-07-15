function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) return -1;

  const middle = Math.floor((left + right) / 2);

  if (arr[middle] === target) {
    return middle;
  }

  if (target < arr[middle]) {
    return binarySearch(arr, target, left, middle - 1);
  }

  return binarySearch(arr, target, middle + 1, right);
}

console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 8, 10], 10));
