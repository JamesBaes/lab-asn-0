const a = [1, 2, 3];
const b = [4, 5, 6];
const c = [7, 8, 9];

/*In terms of the dropbox, it states that two arrays are taken as arguments.
However the output here shows three arrays so I added the third parameter to the function*/

const mergeArrays = (arr1, arr2, arr3) => {
  return [...arr1, ...arr2, ...arr3];
};

merged = mergeArrays(a, b, c);

console.log(merged);

/*
 * Expected output:
 *
 * [
 *   1, 2, 3, 4, 5,
 *   6, 7, 8, 9
 * ]
 */
