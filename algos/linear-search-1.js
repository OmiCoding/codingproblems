// Task: Implement linear search.

function linearSearch(list, item) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === item || list[list.length - 1 - i] === item) {
      console.log(list[i], list[list.length - 1 - i]);
      return true;
    }
    if (list.length % 2 !== 0) {
      if (i === list.length - 1 - i) {
        return "Not found on either end: odd.";
      }
      continue;
    } else if (list.length % 2 === 0) {
      if (i + 1 === list.length - 1 - i) {
        return "Not found on either end: even.";
      }
    }
  }
  return false;
}

console.log("Found it? ", linearSearch([2, 5, 7, 9, 103, 6], 90));
