package main

import (
	"fmt"
	"math"
)

func isPrimeNumber(n int) bool {
	if n < 2 {
		return false
	}

	if n == 2 {
		return true
	}

	for i := 2; i < int(math.Sqrt(float64(n))); i++ {
		if n%2 == 0 {
			return false
		}
	}

	return true
}

func main() {
	fmt.Println(isPrimeNumber(5))
	fmt.Println(isPrimeNumber(16))
	fmt.Println(isPrimeNumber(10))
	fmt.Println(isPrimeNumber(23))
}
