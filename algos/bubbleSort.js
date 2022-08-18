// bubblesorting
let arr1 = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr3 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let arr4 = [26, 38, 12, 4, 75, 100, 42, 5];

/* PREP --- Parameters, Returns, Examples, PseudoCode
Paremeters: arr of numbers,
Returns: returning an array of numbers sorted in ascending order.
Example 1: [3, 2 ,1] ---> [1, 2, 3]. Sort this ascending order
Example 2: [] ---> []; return the arr if it's empty
Example 3: [1, 2, 3] ---> [1, 2, 3]; iterate through the array to check if it's in order.
Example 4: [43, 2, false, true] ---> ???
  1) If the array is supposed an array of numbers, then ignore and return false.
  2) If the array is not an array of numbers do you want to convert the non-numeric values into numbers.
  3) If the array is not an array of numbers do you want filter it out into an array of numbers.

Pseudocode
  function bubblesort(arr) {
    1) basecase-1: If empty return false or return the empty array;
    2) while it's unsorted repeatedly iterate the array.
    3) Iterate through the unsorted array.
    4) We want to sort the array checking between the current index and the index ahead of it.
    5) When the array is sorted break out of the loop.
  }

*/

// O(n^2) --- O(n);
// [9, 2, 5, 6, 4, 3, 7, 10, 1, 8]
function bubbleSort(arr) {
  if (arr.length === 0) return arr;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (j + 1 !== arr.length) {
        if (arr[j] > arr[j + 1]) {
          let elem = arr[j + 1];
          arr[j + 1] = arr[j];
          arr[j] = elem;
        }
      }
    }
  }
  return arr;
}
// i context i = 0
// [9 <--, 2, 5, 6, 4, 3, 7, 10, 1, 8]
// j context j = 0
// [2, 9 <--, 5, 6, 4, 3, 7, 10, 1, 8]
// j = 1
// [2, 5, 9 <--, 6, 4, 3, 7, 10, 1, 8]
// j = 2
// [2, 5, 6, 9 <--, 4, 3, 7, 10, 1, 8]
// j = 3
// [2, 5, 6, 4, 9 <--, 3, 7, 10, 1, 8]
// ...
// j = 6
// [2, 5, 6, 4, 3, 7, 9, 10, 1, 8]

// [2, 5, 6, 4, 3, 7, 9, 1, 8, 10]
// i context i = 1
// [2, 5, 6, 4, 3, 7, 9, 1, 8, 10]
// j context j = 0
// [2, 5, 6, 4, 3, 7, 9, 1, 8, 10]
//...
// j = 2
// [2, 5, 4, 6 <--, 3, 7, 9, 1, 8, 10]
// j = 3
// [2, 5, 4, 3, 6 <--, 7, 9, 1, 8, 10]
// j = 4
// [2, 5, 4, 3, 6, 7, 9, 1, 8, 10]
// j = 5
// [2, 5, 4, 3, 6, 7, 9, 1, 8, 10]
// j = 6
// [2, 5, 4, 3, 6, 7,1, 9 <--, 8, 10]
// j = 7
// [2, 5, 4, 3, 6, 7,1, 8, 9 <--, 10]

// i context = 2
// [2, 5, 6, 4, 3, 7, 1, 8, 9, 10]
// j context j = 0
// [2, 5, 6, 4, 3, 7, 1, 8, 9, 10]

console.log("This array is bubble sorted", bubbleSort(arr1));
console.log("This array is bubble sorted", bubbleSort(arr2));
console.log("This array is bubble sorted", bubbleSort(arr3));
console.log("This array is bubble sorted", bubbleSort(arr4));
