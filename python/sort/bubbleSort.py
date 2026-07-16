def bubbleSort(arr: list[int]) -> list[int]:
    result = arr.copy()

    while True:
        swapped = False

        for i in range(len(result) - 1):
            if result[i] > result[i + 1]:
                result[i], result[i + 1] = result[i + 1], result[i]
                swapped = True

        if not swapped:
            break

    return result


print(bubbleSort([10, 2, 5, 3, 1]))
