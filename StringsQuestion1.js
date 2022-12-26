// Write a program to replace all occurrences of 'a' with $ in a string

// Built in method
str = 'my name is ahmed ashfaq'
str = str.replaceAll('a', '$')
console.log(str)


// without built-in method

str2 = 'my name is ahmed ashfaq'
let newStr = ''
for (i of str2){
    if (i === 'a'){
        newStr += "$"
    }
    else {
        newStr += i
    }
}
console.log(newStr)