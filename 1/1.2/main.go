package main

import "fmt"

func isPermutation(strA string, strB string) bool {
	if len(strA) != len(strB) {
		return false
	}

	var letters [128]int

	for _, s := range strA {
		letters[s]++
	}

	for _, s := range strB {
		letters[s]--
		if letters[s] < 0 {
			return false
		}
	}

	return true
}

func main() {
	fmt.Println(isPermutation("stringA", "Agnirts"))
	fmt.Println(isPermutation("stringA", "StringA"))
	fmt.Println(isPermutation("stringA", "stringAA"))
	fmt.Println(isPermutation("stringA", "stringB"))
}
