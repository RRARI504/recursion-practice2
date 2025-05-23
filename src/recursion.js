// Solve all of the following prompts using recursion.



// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  //base
  if(n < 0){
    return null;
  }
  //recursion

  if(n <= 1){
    return 1;
  }else {
    return n * factorial(n - 1);
  }
  

 
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  //base 
  if(array.length === 0){
    return 0;
  }
  //hits base case when the recursion has iterated throughout the whole array

  //recursion
  return array[0] + sum(array.slice(1))
  //just return the current iteration in the array concatenated w/ 
  //the result of invoking the sum recursion on every index in the array
  //after the 0 index

};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  
};

// 4. Check if a number is even.
var isEven = function(n) {
  //base
  if(isNaN(n)){
    return false;
  }
  //recursion
  if(n < 0){//normalize negative nums
    n = -n
  }
   if(n === 0){//if n = 0 return true for even nums
    return true;
  }
  if(n === 1){ //if n = 1 return false for odd nums
    return false

  }
  return isEven(n - 2) //recursively subtract 2 from n 
  //until it his 0 (even) or 1 (odd)

};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  //base
  if(n === 0){//if number is zero return zero
    return 0;
  }
  //recursion
  if(n > 0){ //if n is > 0
    return (n - 1) + sumBelow(n - 1)
    //return n - 1 and add n - 1 recursively until hitting zero
  }  

  if(n < 0){//if n < 0
    return (n + 1) + sumBelow(n + 1)
    //return n + 1 and add n + 1 recursively until hitting zero
  }  
  
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
  //base 
  if(Math.abs(x - y) <= 1){
    return [];
    //base case thats stops the recursion if no integers are  between the numbers 
    //if absolute difference between x and y is 1 or zero return an empty array
  }
  
  //recursion
  if(x < y){ //if first integer smaller than second 
   return [x + 1].concat(range(x + 1, y))
    // add x + 1 then concatenate the result of calling range recursively to get the
    //rest of the numbers
  }else{
    return [x - 1].concat(range(x - 1, y))
  }
 
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  //base
  if(exp === 0){ //if exp equal zero return 1 to stop recursion
    //cant raise number to zeroth power
    return 1;
  }

  //recursion
  if(exp > 0){
    return base * exponent(base, exp - 1)
    //if exponent greater than 0 
    //return base * call recursive function that takes in current base and reduces exponenet by 1
  }else{
    return 1 / exponent(base, -exp)
    //else return 1 divided by calling the exponent function on the base and negative exponents
  }

};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  //base
  if(n < 1){//if n is negative return false
    return false
  }else if(n === 1){ //if n equal to 1 return true
    return true
  }else if(n % 2 !== 0 ){//if n is not divisible by two retunrn false
    return false

  }

  //recursion
  return powerOfTwo(n / 2)
  //to keep recursion going call function on number / 2
};



// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  //base
  if(string === ''){
    return '';
  }//if the string is equal to an empty string stop the recursion

  //recursion
  return reverse(string.slice(1)) + string[0]
  //return invocation of reverse function on second index in string
  // concatenated w the first index
  

};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  string = string.toLowerCase().replace(/[^a-z0-9]/g, '');
  // Base case
  if (string.length <= 1) {
    return true;
  }

  // Recursive case
  if (string[0] !== string[string.length - 1]) {
    return false;
  }

  return palindrome(string.slice(1, -1));
  

};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION. The test is looking for any ('/').
var multiply = function(x, y) {
  if(y === 0){
    return 0;
  }
  if(y > 0){
    return x + multiply(x, y - 1)

  }else{
    return -multiply(x, -y)
  }



};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {

  if(x < 0){
    return -divide(-x, y);
  }

  if(y < 0){
    return -divide(x, -y);
  }

  if(x < y){
    return 0;
  }

  return 1 + divide(x - y, y)
  
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  
};

// 15. Write a function that compares each character of two strings and 
//returns true if both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  //base
  if(str1 === '' && str2 === ''){//if both strings are empty they are equal 
    return true; 
  }
  //recursion 
  if(str1[0] !== str2[0]){//if the first character inthe strings are not equal
    // or one string is empty than they are not equal.
    return false
  }
  
  return compareStr(str1.slice(1), str2.slice(1))
  //recursively call the compareStr function on everyt character after the first 
  //character
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
  //base 
  if(str === ''){//if the string doesnt exist return an empty array
    return [];
  }

  //recursion
 return [str[0]].concat(createArray(str.slice(1)))
 //return the first char of the array in a sub array [str[0]]
 //
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
  //base
  if(array.length <= 1){
    return array; 
  }
  return [array[array.length - 1]].concat(reverseArr(array.slice(0, array.length - 1)))

};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  //base
  if(length === 0){
    return [];
  }

  //recursion 
return [value].concat(buildList(value, length - 1))
//return a new array w/ value as the element and invoke the buildList function on the value and the length - 1


};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  //base
  if(array.length === 0){
    return 0;
  }
  return (array[0] === value ? 1 : 0) + countOccurrence(array.slice(1), value)
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback, output=[]) {
  if(array.length === 0){
    return output;
  }

 output.push(callback(array[0]))

 return rMap(array.slice(1), callback, output)
  
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {

  if(n < 0){
    return null
  }
  if(n === 0){
    return 0
  }

  if(n === 1){
    return 1
  }

  return nthFibo(n - 1) + nthFibo(n - 2)
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
  //base
  if(input.length === 0){ //if the input array is empty return an empty array
    return []
  }

  let [first, ...rest] = input//assign first to the first element in the array and rest is a 
  //a new array containing the remaining elements
  return [first.toUpperCase(), ...capitalizeWords(rest)]
  //return the first element capitalized
  //recursively calls capitalizeWords on the rest of the elements in the array and combine using spread
  //operator.

  

};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
  if(array.length === 0){//if the input array is empty return an empty array
    return [];
  }

  let[first, ...rest] = array//assign first to the first element in the array and rest is a 
  //a new array containing the remaining elements
  let frst = first[0].toUpperCase() + first.slice(1) //let frst equal the first charachter in each element
  //upper cased concatenated w/ the rest of the string

  return [frst, ...capitalizeFirst(rest)]//return the uppercased string and recursively call capitalizeFirst
  //on the rest of the elements
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj={}) {
  //base
  if(str.length === 0){
    return obj;
  }

  //recursion
  let first = str[0] //extract the first letter of the string

  obj[first] = (obj[first] || 0) + 1 
  //increment the count of the first letter in the object. 
  //If the letter is not already in object, it initializes the count to 1.

  return letterTally(str.slice(1), obj)
  //recursively call letterTally on the rest of the string and the updated tally object.

};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
  //base
  if(list.length === 0){
    return list;
  }

  //recursion 
  if(list[0] === list[1]){ //if the current element is the same as the next  
    return compress(list.slice(1))
    //recursively call compress on the rest of the elements.
  }

  return [list[0]].concat(compress(list.slice(1)))
  //otherwise, keep the first element and recurse on the rest
 
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  //base
  if(array.length === 0){
    return array;
  }

  //recursion 
  if(array[0] === array[1]){
    return minimizeZeroes(array.slice(1))
  }

  return [array[0]].concat(minimizeZeroes(array.slice(1)))
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  
  //base
  if(array.length === 0){
    return [];
  }

  //reursion
  let result = alternateSign(array.slice(0, -1))
  //set result equal to the invocation of alternateSign on every element except for the first element.

  let index = result.length; 
  // set index equal to the length of the array 

  let value = Math.abs(array[array.length - 1])
  //set value equal to current value of the original array 

  if(value === 0 && result[result.length - 1] === 0){
    return result;

  }

  if(index % 2 !== 0){
    value = -value
  }
  //if the index is odd make the number negative

  return result.concat(value)
  

};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  const nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  //base
  if(str.length === 0){
    return ''
  }


  //recursion 
  let frst = str[0]
  let converted = /\d/.test(frst) ? nums[Number(frst)] : frst

  return converted + numToText(str.slice(1))
 
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------