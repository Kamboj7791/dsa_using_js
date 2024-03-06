//given a sorted array of n element and a target element t find the index of t in the array . Return -1 if the  target element is not found
function recursiveBinarySearch(array, target) {
  return search(array, target, 0, array.length - 1);
}
function search(array, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1;
  }
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (target === array[middleIndex]) {
    return middleIndex;
  }
  if (target > array[middleIndex]) {
    return search(array, target, middleIndex + 1, rightIndex);
  } else {
    return search(array, target, leftIndex, rightIndex - 1);
  }
}
console.log(recursiveBinarySearch([2, 3, 6, 8, 19, 20], 3));
console.log(recursiveBinarySearch([2, 3, 6, 8, 19, 20], 4));
console.log(recursiveBinarySearch([2, 3, 6, 8, 19, 20], 20));
