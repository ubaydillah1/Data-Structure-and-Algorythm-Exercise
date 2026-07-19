package main

import "fmt"

func insertionSort(arr []int) []int {
	for i := 1; i < len(arr); i++ {
		numberToInsert := arr[i]
		j := i - 1

		for j >= 0 && arr[j] > numberToInsert {
			arr[j+1] = arr[j]
			j--
		}

		arr[j+1] = numberToInsert
	}

	return arr
}

func main() {
	fmt.Println(insertionSort([]int{-6, 20, 8, -2, 4}))
}
