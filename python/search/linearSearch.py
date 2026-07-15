from typing import List


def linearSearch(arr: List[int], target: int) -> int:
    for i in range(len(arr)):
        if arr[i] == target:
            return i

    return -1


print(linearSearch([-5, 2, 10, 4, 6], 10))
print(linearSearch([-5, 2, 10, 4, 6], 6))
print(linearSearch([-5, 2, 10, 4, 6], 20))
