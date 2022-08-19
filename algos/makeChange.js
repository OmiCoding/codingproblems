/* PREP - Parameters, Result, Examples, Pseudocode

  Is the data we're receiving an array of numbers? or strings?
  Is the data a string value in the representation of US currency?
  Will there be data that is not relevant to the function? Such as an empty string or an array that has other types of data?


  The result will be to calculate the amount of change relevant to the parameter amount, and what it returns is a hash of the total amount with key value pairs of the bills and how many times it was needed.

  Examples:

  If the parameter is zero then return a string saying that there is no money here.

  If the parameter is a number lets say 45 ---> it should return { total: 45, 20: 2, 5: 1 }

  PseudoCode:
  
  function makeChange() {
    basecase-1: return a string if the string is zero, or an empty string.
    filter out any non-numeric characters and create a new string.
    convert the string into a number.
    create a loop that loop until the number reaches zero, or until it can't be divisible by 5.
    add the key if it's divisible by either 20, 10, or 5, and a counter for each time it lands on either one.
    exit function when the number is no longer divisible by 5.
  }

*/

function makeChange(total) {
  if (total.length === 0) {
    return "No change.";
  } else if (typeof total !== "string") {
    return "Invalid total.";
  }

  let change = {
    total: total,
  };
  let num = "";

  for (let i = 0; i < total.length; i++) {
    if (/[0-9]/.test(total[i])) {
      num += total[i];
    }
  }

  num = Number(num);

  while (true) {
    if (num - 20 >= 0) {
      num -= 20;
      if (!change[20]) {
        change[20] = 1;
      } else {
        change[20] += 1;
      }
    } else if (num - 10 >= 0) {
      num -= 10;
      if (!change[10]) {
        change[10] = 1;
      } else {
        change[10] += 1;
      }
    } else if (num - 5 >= 0) {
      num -= 5;
      if (!change[5]) {
        change[5] = 1;
      } else {
        change[5] += 1;
      }
    } else {
      break;
    }
  }

  return change;
}

console.log("Your change in bills for this amount: ", makeChange("$179"));
