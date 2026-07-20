def insertionSort(arr: list[int]) -> list[int]:
    for i in range(1, len(arr)):
        numberToInsert = arr[i]
        j = i - 1

        while j >= 0 & arr[j] > numberToInsert:
            arr[j + 1] = arr[j]
            j = j - 1

        arr[j + 1] = numberToInsert

    return arr


print(insertionSort([-6, 20, 8, -2, 4]))
