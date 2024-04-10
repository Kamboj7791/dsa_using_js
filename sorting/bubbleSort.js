//given an array of integers , sort the array.
function bubbleSort(array) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        console.log(swapped);
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}
let array = [2, 1, 23, 45, 32, 35];
bubbleSort(array);
console.log(array);

//Big-o=o(n^2)
