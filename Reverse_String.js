// Reverse a string in javascript without using the reverse() method and initializing a new array

function reverseString(s){
    let startPointer = 0;
    let endPointer = s.length-1
    
    while (startPointer < endPointer){
        temp = s[startPointer]
        s[startPointer] = s[endPointer]
        startPointer++
        s[endPointer] = temp
        endPointer--
    }
    
    return s
}

s = ["A","h","m","e","d"]
console.log(reverseString(s))
