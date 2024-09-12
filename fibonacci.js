/* Iterative fibonacci solution */
function fibs(num) {
  const fibsArray = [];

  for (let i = 0; i < num; i++) {
    if (i === 0) {
      fibsArray.push(0);
    } else if (i === 1) {
      fibsArray.push(1);
    } else {
      const newFib = fibsArray[i - 1] + fibsArray[i - 2];
      fibsArray.push(newFib);
    }
  }
  return fibsArray;
}

console.log(fibs(8));

/* Recursive fibonacci solution */
function fibsRec(num) {
  const allFibs = [0];
  recurseFib(num - 1, allFibs);
  return allFibs;
}

function recurseFib(num, arr) {
  if (num === 0) {
    return 0;
  } else if (num === 1) {
    arr.push(1);
    return 1;
  }
  const newFib = recurseFib(num - 1, arr) + arr[num - 2];
  arr.push(newFib);
  return newFib;
}

console.log(fibsRec(8));
