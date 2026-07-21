package main

import "fmt"

func quickSort(arr []int) []int {
	if len(arr) <= 1 {
		return arr
	}

	pivot := arr[len(arr)-1]
	left := []int{}
	right := []int{}

	for i := 0; i < len(arr)-1; i++ {
		if arr[i] >= pivot {
			right = append(right, arr[i])
		} else {
			left = append(left, arr[i])
		}
	}

	result := append([]int{}, quickSort(left)...)
	result = append(result, pivot)
	result = append(result, quickSort(right)...)

	return result
}

func main() {
	fmt.Println(quickSort([]int{-6, 20, 5, 5, 4, 3}))
}
