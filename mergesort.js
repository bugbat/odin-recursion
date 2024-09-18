function mergeSort(arr) {
  if (arr.length === 1) return arr;

  const left = mergeSort(arr.slice(0, arr.length / 2));
  const right = mergeSort(arr.slice(arr.length / 2, arr.length));

  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    }
    else {
      result.push(right.shift());
    }
  }
  while (right.length > 0) result.push(right.shift());
  while (left.length > 0) result.push(left.shift());
  return result;
}

export { mergeSort }