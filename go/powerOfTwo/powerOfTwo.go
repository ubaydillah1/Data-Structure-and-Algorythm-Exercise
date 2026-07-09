package main

import "fmt"

func isPowerOfTwo(n int) bool {

	for i := n; i > 2; i = i / 2 {
		if i%2 != 0 {
			return false
		}
	}

	return true
}

func main() {
	fmt.Println(isPowerOfTwo(50))
	fmt.Println(isPowerOfTwo(24))
	fmt.Println(isPowerOfTwo(64))
	fmt.Println(isPowerOfTwo(2))
}
