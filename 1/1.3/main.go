package main

import (
	"fmt"
	"strings"
)

func urlify(str string) string {
	return strings.Join(strings.Fields(str), "%20")
}

type CharArray struct {
	arr        []string
	trueLength int
}

func (c *CharArray) replaceSpaces() {
	numberOfSpaces := 0
	for i := 0; i < c.trueLength; i++ {
		if c.arr[i] == " " {
			numberOfSpaces++
		}
	}
	newIndex := c.trueLength - 1 + numberOfSpaces*2
	if newIndex+1 < len(c.arr) {
		c.arr[newIndex+1] = "\000"
	}
	for oldIndex := c.trueLength - 1; oldIndex >= 0; oldIndex-- {
		if c.arr[oldIndex] == " " {
			c.arr[newIndex] = "0"
			c.arr[newIndex-1] = "2"
			c.arr[newIndex-2] = "%"
			newIndex -= 3
		} else {
			c.arr[newIndex] = c.arr[oldIndex]
			newIndex--
		}
	}
}

func main() {
	fmt.Println(urlify("Mr John Smith   "))

	chrArray := strings.Split("Mr John Smith        ", "")
	var c = CharArray{arr: chrArray, trueLength: 13}
	fmt.Println(c.arr, c.trueLength)
	c.replaceSpaces()
	fmt.Println(c.arr)
	fmt.Println(strings.TrimSpace(strings.Join(c.arr, "")))
}
