package main

import (
	"fmt"
)

func isUniqueChars(str string) bool {
	checker := 0
	binaryA := []rune("a")[0]

	for _, s := range str {
		shiftValue := s - binaryA

		oneLeftWardShifted := 1 << shiftValue
		if checker&oneLeftWardShifted > 0 {
			return false
		}
		checker |= oneLeftWardShifted
	}
	return true
}

func main() {
	fmt.Println(isUniqueChars("abcdef"))  // true
	fmt.Println(isUniqueChars("abcdefb")) // false

}
