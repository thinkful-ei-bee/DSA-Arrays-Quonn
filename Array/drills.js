const Array = require("./array");

// 2.) Explore the push() method
function main(){

    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // Add an item to the array
    arr.push(3);
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
    arr.pop();
    arr.pop();
    arr.pop();
    arr.pop();
    arr.pop();
    arr.pop();
    arr.push("tauhida");

    // prints first item in array
    console.log(arr, arr.get(0));
}

//main();

// Length is now six, because we pushed 5 new elements. ptr is at 3 because our 
// resize ratio is 3, and our array is resized twice to accomodate 5 new items


//.3) Exploring the pop() method
// New length is 3, capacity isn't affected by pop, ptr remains the same because no resize has occurred

//.4) Understanding more about how arrays work
// Printing the first element after pushing Tauhida returns NAN, Because we tried to push a string instead of a float

//.5) URLify a string

// Common mistake users make when they type in an URL is to put spaces between words or letters. A solution that developers can use to solve this problem is to replace any spaces with a %20. Write a method that takes in a string and replaces all its empty spaces with a %20. Your algorithm can only make 1 pass through the string. Examples of input and output for this problem can be

// Input: tauhida parveen

// Output: tauhida%20parveen

// Input: www.thinkful.com /tauh ida parv een

// Output: www.thinkful.com%20/tauh%20ida%20parv%20een

replaceSpaces = (str) => {
    str = str.split(" ").join('%20');
    console.log(str)
}

// complexity: 0(1) (constant)


//.6) Filtering an array
// Imagine you have an array of numbers. Write an algorithm 
// to remove all numbers less than 5 from the array. DO NOT 
// use Array's built-in .filter() method here; write the algorithm from scratch.

filterArray = (arr) => {
    for( var i = 0; i < arr.length; i++){ 
        if ( arr[i] < 5) {
          arr.splice(i, 1); 
        }
        console.log(arr.length)
     }        
    return arr;
}

// console.log(filterArray([4,6,7,3]))

//complexity O(n) or linear

// .7) Max sum in the array
// You are given an array containing positive and 
// negative integers. Write an algorithm which will 
// find the largest sum in a continuous sequence.

// Input: [4, 6, -3, 5, -2, 1]
// Output: 12

maxSum = arr => {
    let sum = 0;
    let max = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
        if(sum > max){
            max = sum;
        }
    }
    
    return max;
}

// console.log(maxSum([4,-3,2,5]))


// Complexity is O(n) or linear

//Merge Arrays
// Imagine you have 2 arrays which have already been 
// sorted. Write an algorithm to merge the 2 arrays into
// a single array, which should also be sorted.

// Input:[1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]
// Output:[1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]

mergeArrays = (arr1, arr2) => {
    let newArr = [...arr1,...arr2];
    newArr = newArr.sort((a, b) => a - b);
    return newArr;
}

// console.log(mergeArrays([1, 3, 6, 8, 11],[2, 3, 5, 8, 9, 10]))

//complexity is O(n) or Linear

//.9) Remove characters

// Write  an algorithm that deletes given characters from a string. For example, given a string of "Battle of the Vowels: Hawaii vs. Grozny" and the characters to be removed are "aeiou", the algorithm should transform the original string to "Bttl f th Vwls: Hw vs. Grzny". Do not use Javascript's filter, split, or join methods.

// Input:'Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'
// Output: 'Bttl f th Vwls: Hw vs. Grzny'

removeChars = (str) => {
    // replaces upper and lowercase "a","e","i","o and "u" with " ", throughout the entire string 
    return str.replace(/[aeiou]/ig,'')
}

// console.log(removeChars("lIKE A RIHINESTONE COWBOY"))

//Complexity O(n) or Linear

//.10) Products
// Given n an array of numbers, write an algorithm to find out the products of every other number except the number at each index.

// Input:[1, 3, 9, 4]
// Output:[108, 36, 12, 27]

getProducts = (arr) => {
    let newArr = [];
    let sum = 0;
    for(i = 0; i < arr.length; i++){
        for(j = 0; j < arr.length; j++ ){
            sum += arr[j]
            newArr.push(sum)
        }
    }
    return newArr
}

console.log(getProducts([1,3,9,4]))