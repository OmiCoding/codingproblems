//Task: Transform this simple sorting algorithm into a unique sort.
// It should not return any duplicate values in the sorted array.

//input: [1,5,2,1] => output: [1,2,5]
//input: [4,2,2,3,2,2,2] => output: [2,3,4]

// Solution

// TC:  O(2nlogn)
// SC: O(n)

const uniqSort = function (arr) {
  const breadcrumbs = {}; // SC: O(n)

  return arr
    .sort((a, b) => a - b) // TC: O(nlogn)
    .filter((e) => {
      // TC: O(n)
      if (!breadcrumbs[e]) {
        breadcrumbs[e] = e; // TC: O(1)
        return true;
      }
      return false;
    });
};

console.log(uniqSort([1, 5, 2, 1])); // => [2,3,4]
