package main

import "fmt"

func linearSearch(arr []int, target int) int {
	for i := range arr {
		if arr[i] == target {
			return i
		}
	}

	return -1
}

func main() {
	fmt.Println(linearSearch([]int{-5, 2, 10, 4, 6}, 10))
	fmt.Println(linearSearch([]int{-5, 2, 10, 4, 6}, 6))
	fmt.Println(linearSearch([]int{-5, 2, 10, 4, 6}, 20))
}
