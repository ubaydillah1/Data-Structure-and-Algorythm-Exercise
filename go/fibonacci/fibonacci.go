package main

import "fmt"

func fibonacci(n int) []int {
	if n < 0 {
		return []int{0}
	}

	result := []int{0, 1}

	for i := 0; i < n-2; i++ {
		result = append(result, result[i]+result[i+1])
	}

	return result
}

func main() {
	fmt.Println(fibonacci(6))
}
