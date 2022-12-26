// write a program to remove the nth index character from a non empty string

let str = 'hello'
const position = 0;
if (str.length > 0){
    str = (str.slice(0, position) + str.slice(position+1, str.length))
    console.log(str)
}