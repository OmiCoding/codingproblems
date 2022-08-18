// mergeSort
let arr1 = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr3 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let arr4 = [26, 38, 12, 4, 75, 100, 42, 5];

/* 
  PREP Parameters Returns Examples PseudoCode
  What are the parameters to this problem? Is this an array, an object, a number, etc. 
  An array.
  What types are in this array? It's an array of integers. 
  Are there empty arrays in this problem? Yes.
  Is there always more then one element in the array? Yes.

  This will return a sorted array of numbers.

  Examples

  [] ---> return the empty array.
  [1,2, 3] ---> [1,2,3] return after iterating over array.
  [3,2,1] ---> [1,2,3] return after sorting array.
  [10, false, "", 3] ---> [10, 3] filter  for number values --> [3, 10] and return after sorted array.
  [10, false, "", 3] ---> [10, 0, NaN] convert non-numeric types to numbers --> [3, 10, NaN] and return after sorting array.

  PseudoCode
  
  function mergeSort() {
    - 1) basecase-1: if empty return empty array.
    - 2) basecase-2: if it's already sorted iterate over array and return.
    3) basecase-3: subArrs.length === 1 for left or right side stop recursing.
    4) recurse outer function splitting the array until it reaches 1 and assign left and right side to two variables that will have the split pieces.
    5) left side takes precedence.
    6) execute the sub function
    7) create new array, and assign the array with sorted items.
  }

}

*/

function mergeSort(arr) {
  if (arr.length === 0) return;
  for (let i = 0; i < arr.length; i++) {
    if (i + 1 === arr.length) {
      if (arr[i] > arr[i + 1]) {
        break;
      } else if (arr[i] < arr[i + 1] && i === arr.length - 2) {
        return;
      }
    }
  }

  let newArr = [];

  function merging(left, right) {
    let subArr = [];
    if (left[left.length - 1] < right[0]) {
      subArr.push(...left, ...right);
      return subArr;
    } else if (right[right.length - 1] < left[0]) {
      subArr.push(...right, ...left);
      return subArr;
    }

    let lenNum = left.length + right.length;

    if (lenNum === 2) {
      if (left[0] > right[0]) {
        subArr[0] = right[0];
        subArr[1] = left[0];
      } else {
        subArr[0] = left[0];
        subArr[1] = right[0];
      }
    } else if (lenNum === 3) {
      if (left[0] < right[0]) {
        if (left[1] > right[0]) {
          subArr[0] = left[0];
          subArr[1] = right[0];
          subArr[2] = left[1];
        } else {
          subArr[0] = left[0];
          subArr[1] = left[1];
          subArr[2] = right[0];
        }
      } else {
        subArr[0] = right[0];
        subArr[1] = left[0];
        subArr[2] = left[1];
      }
    } else {
      let indL = 0;
      let indR = 0;

      while (indL < left.length && indR < right.length) {
        if (left[indL] < right[indR]) {
          subArr.push(left[indL]);
          indL++;
        } else {
          subArr.push(right[indR]);
          indR++;
        }
      }

      subArr = subArr.concat(left.slice(indL)).concat(right.slice(indR));
    }

    return subArr;
  }

  function mergeRecursive(arr) {
    let lArr, rArr;

    if (arr.length === 1) return arr;
    if (arr.length % 2 === 0) {
      lArr = arr.slice(0, arr.length / 2);
      rArr = arr.slice(arr.length / 2, arr.length);
    } else if (arr.length % 2 !== 0) {
      let num = Math.floor(arr.length / 2 + 1);
      lArr = arr.slice(0, num);
      rArr = arr.slice(num, arr.length);
    }

    let left = mergeRecursive(lArr);
    let right = mergeRecursive(rArr);
    return merging(left, right);
  }

  console.log(mergeRecursive(arr));
}

mergeSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
