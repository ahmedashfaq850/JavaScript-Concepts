// write a program to detect if two strings are anagrams or not

function checkAnagram(str1, str2) {
  const str1Length = str1.length;
  const str2Length = str2.length;
  // first check the length of both strings
  if (str1Length !== str2Length) {
    console.log("not an anagrams");
  } else {
    // now sort both strings
    str1 = str1.split("").sort().join("");
    str2 = str2.split("").sort().join("");

    if (str1 === str2) {
      console.log("both strings are anagram");
    } else {
      console.log("Strings are not an angram");
    }
  }
}

// deive code
let str1 = "abcd";
let str2 = "dbca";
checkAnagram(str1, str2);
