// count the number of Vowels in a string

const str = "The quick brown fox jumps over the lazy dog"
let count = 0;

for (i of str){
    if (i === 'a' || i === 'e' || i === 'i' || i === 'o' || i === 'u'){
        count +=1
    }
}


console.log(count)