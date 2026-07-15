import math


def binarySearch(arr: list[int], target: int) -> int:
    if len(arr) == 0:
        return -1

    leftIndex = 0
    rightIndex = len(arr) - 1

    while rightIndex >= leftIndex:
        middleIndex = math.floor((leftIndex + rightIndex) / 2)

        if arr[middleIndex] == target:
            return middleIndex
        else:
            if target > middleIndex:
                leftIndex = middleIndex + 1
            else:
                rightIndex = middleIndex - 1

    return -1


print(binarySearch([0, 1, 2, 3, 4, 5, 6, 8, 10], 10))
print(binarySearch([0, 1, 2, 3, 4, 5, 6, 8, 10], 11))
print(binarySearch([0, 1, 2, 3, 4, 5, 6, 8, 10], 0))
print(binarySearch([0, 1, 2, 3, 4, 5, 6, 8, 10], 4))
