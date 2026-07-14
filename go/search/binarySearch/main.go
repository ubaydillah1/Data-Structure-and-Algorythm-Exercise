package main

import "fmt"

func binarySearch(arr []int, target int) int {
	if len(arr) == 0 {
		return -1
	}

	leftIndex := 0
	rightIndex := len(arr) - 1

	for leftIndex <= rightIndex {
		middleIndex := (leftIndex + rightIndex) / 2

		if arr[middleIndex] == target {
			return middleIndex
		} else {
			if target > middleIndex {
				leftIndex = middleIndex + 1
			} else {
				rightIndex = middleIndex - 1
			}
		}

	}

	return -1
}

func main() {

	fmt.Println(binarySearch([]int{0, 1, 2, 3, 4, 5, 6, 8, 10}, 10))
	fmt.Println(binarySearch([]int{0, 1, 2, 3, 4, 5, 6, 8, 10}, 11))
	fmt.Println(binarySearch([]int{0, 1, 2, 3, 4, 5, 6, 8, 10}, 0))
	fmt.Println(binarySearch([]int{0, 1, 2, 3, 4, 5, 6, 8, 10}, 4))

}
