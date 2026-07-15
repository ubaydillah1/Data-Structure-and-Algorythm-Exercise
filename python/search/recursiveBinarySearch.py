import math


def recursiveBinarySearch(arr: list[int], target: int) -> int:
    return search(arr, target, 0, len(arr) - 1)


def search(arr: list[int], target: int, leftIndex: int, rightIndex: int) -> int:
    if leftIndex > rightIndex:
        return -1

    middleIndex = math.floor((leftIndex + rightIndex) / 2)

    if arr[middleIndex] == target:
        return middleIndex

    if target > arr[middleIndex]:
        return search(arr, target, middleIndex + 1, rightIndex)

    return search(arr, target, leftIndex, middleIndex - 1)


numbers = [0, 1, 2, 3, 4, 5, 6, 8, 10]

print(recursiveBinarySearch(numbers, 10))
print(recursiveBinarySearch(numbers, 11))
print(recursiveBinarySearch(numbers, 0))
print(recursiveBinarySearch(numbers, 4))
