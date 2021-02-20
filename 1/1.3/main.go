package main

import (
	"fmt"
	"strings"
)

func urlify(str string) string {
	return strings.Join(strings.Fields(str), "%20")
}

func main() {
	fmt.Println(urlify("Mr John Smith   "))
}
