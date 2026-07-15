function BinarySearch(arr, target) {
  if (arr.length < 1) return -1;

  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (arr[middleIndex] === target) {
      return middleIndex;
    }

    if (target > middleIndex) {
      leftIndex = middleIndex + 1;
    } else {
      rightIndex = middleIndex - 1;
    }
  }

  return -1;
}

console.log(BinarySearch([0, 1, 2, 3, 4, 5, 6, 8, 10], 10));
console.log(BinarySearch([0, 1, 2, 3, 4, 5, 6, 8, 10], 11));
console.log(BinarySearch([0, 1, 2, 3, 4, 5, 6, 8, 10], 0));
console.log(BinarySearch([0, 1, 2, 3, 4, 5, 6, 8, 10], 4));
