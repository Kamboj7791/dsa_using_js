//given an array of integers , sort the array.
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInserted = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numberToInserted) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = numberToInserted;
  }
}

let arr = [-2, , 5, -3, -4, 8, -9, 10];
insertionSort(arr);
console.log(arr);
