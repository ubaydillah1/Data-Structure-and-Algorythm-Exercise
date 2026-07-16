package main

import "fmt"

func bubbleSort(arr []int) any {
	result := make([]int, len(arr))
	copy(result, arr)

	swapped := true
	for swapped == true {
		swapped = false

		for i := 0; i < len(arr)-1; i++ {
			if result[i] > result[i+1] {
				temp := result[i]
				result[i] = result[i+1]
				result[i+1] = temp

				swapped = true
			}
		}
	}

	return result
}

func main() {
	fmt.Println(bubbleSort([]int{10, 5, 4, 2, 1, -3}))
}
