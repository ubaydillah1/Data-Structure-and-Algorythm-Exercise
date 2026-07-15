package main

import "fmt"

func binarySearchRecursive(arr []int, target int) int {
	return search(arr, target, 0, len(arr)-1)
}

func search(arr []int, target int, leftIndex int, rightIndex int) int {
	if leftIndex > rightIndex {
		return -1
	}

	middleIndex := (leftIndex + rightIndex) / 2

	if arr[middleIndex] == target {
		return middleIndex
	}

	if target > arr[middleIndex] {
		return search(arr, target, middleIndex+1, rightIndex)
	}

	return search(arr, target, leftIndex, middleIndex-1)
}

func main() {

	fmt.Println(binarySearchRecursive([]int{0, 1, 2, 3, 4, 5, 6, 8, 10}, 10))
	fmt.Println(binarySearchRecursive([]int{0, 1, 2, 3, 4, 5, 6, 8, 10}, 11))
	fmt.Println(binarySearchRecursive([]int{0, 1, 2, 3, 4, 5, 6, 8, 10}, 0))
	fmt.Println(binarySearchRecursive([]int{0, 1, 2, 3, 4, 5, 6, 8, 10}, 4))

}
