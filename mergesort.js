function mergeSort(arr, start, end) {
  if (start < end) {
    const middle = Math.floor((start + end) / 2);
    mergeSort(arr, start, middle);
    mergeSort(arr, middle + 1, end);
    return merge(arr, start, middle, end);
  }
  return arr;
}

function merge(arr, start, middle, end) {
  const array1 = arr.slice(start, middle + 1);
  const array2 = arr.slice(middle + 1, end + 1);

  for (let k = start; k < end + 1; k++) {
    if (array1.length === 0) {
      arr[k] = array2[0];
      array2.shift();
    } else if (array2.length === 0) {
      arr[k] = array1[0];
      array1.shift();
    } else if (array1[0] < array2[0]) {
      arr[k] = array1[0];
      array1.shift();
    } else if (array2[0] <= array1[0]) {
      arr[k] = array2[0];
      array2.shift();
    }
  }

  return arr;
}

const testArray = [3, 2, 1, 13, 8, 5, 0, 1];

console.log(mergeSort(testArray, 0, testArray.length - 1));
