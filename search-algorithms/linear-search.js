//given an array of n elements and a target t  find the index of t in the array. return -1 if the target element is not found
function linearSearch(t) {
  let array = [1, 3, 4, 5, 2, 8];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === t) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch(2));
console.log(linearSearch(4));
console.log(linearSearch(6));
//Big-o=o(n)
