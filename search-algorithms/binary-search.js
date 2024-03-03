//given a sorted array of n element and a target element t find the index of t in the array . Return -1 if the  target element is not found
function binarySearch(target) {
  let array = [2, 4, 6, 8, 10, 14, 16, 19, 20];
  let leftIndex = 0;
  let rightIndex = array.length - 1;
  while (leftIndex <= rightIndex) {
    middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === array[middleIndex]) {
      return middleIndex;
    }
    if (target < array[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}
console.log(binarySearch(4));
console.log(binarySearch(3));
console.log(binarySearch(8));
//Big-o=o(logn)
