import random


def quickSort(arr: list[int]) -> list[int]:
    if len(arr) <= 1:
        return arr

    pivot = random.choice(arr)
    left = []
    middle = []
    right = []

    for number in arr:
        if number < pivot:
            left.append(number)
        elif number == pivot:
            middle.append(number)
        else:
            right.append(number)

    return quickSort(left) + middle + quickSort(right)


print(quickSort([10, 2, 5, 3, 1, 8, 2]))
