/**
 * Concatenates three arrays and a string into a single array.
 *
 * @param {Array} array1 - The first array
 * @param {Array} array2 - The second array
 * @param {string} string - The string to concatenate.
 * @return {Array} An array that contains all the elements of the input arrays and the string.
 */
export default function concatArrays(array1, array2, string) {
	return [...array1, ...array2, ...string];
  }
