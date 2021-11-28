// sum zero function
function addToZero(arr){
  for(let i = 0; i < arr.length; i++){
   for(let j = 1; j < arr.length; j++){
     if(arr[i] + arr[j] === 0){
       return true
     }
   }
  }
  return false
}
let test1 = addToZero([]) //false
let test2 = addToZero([1]) //false
let test3 = addToZero([1, 2, 3]) //false
let test4 = addToZero([1, 2, 3, -2]) //true

// console.log(test4)

//addToZero Runtime: O(n^2)
//addToZero Space Complexity: 0(n^2)


// Unique Characters
function hasUniqueChars(string){
  stringSplit = string.split('')
  stringSet = [...new Set(string)]
  if(stringSet.length === stringSplit.length){
    return true
  } else {
    return false
  }
}

let test5 = hasUniqueChars('Monday')
let test6 = hasUniqueChars('Moonday')
// console.log(test6)

//hasUniqueChars Runtime: O(n)
//hasUniqueChars Space Complexity: O(n)


// Pangram function
function isPangram(string){
  let strArr = string.toLowerCase();
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  for (let i = 0; i < alphabet.length; i++) {
      if(strArr.indexOf(alphabet[i]) < 0) {
          return false;
      }
  }
  return true;
}

let test7 = isPangram('The quick brown fox jumps over the lazy dog!')
let test8 = isPangram('I like cats, but not mice!')

// console.log(test8)

//isPangram Runtime: O(n)
//isPangram Space Complexity: O(n)


// find longest word function
function findLongestWord(array){
  longestWord = ''
  array.forEach(elem => {
    if(elem.length > longestWord.length){
      longestWord = elem
    }
  })
  return longestWord.length
}

let test9 = findLongestWord(['hi', 'hello'])
let test10 = findLongestWord(['bye', 'goodbye'])

// console.log(test10)

//findLongestWord Runtime: O(n)
//findLongestWord Space Complexity: O(n)