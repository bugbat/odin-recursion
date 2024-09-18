function fibs(n) {
  if (n <= 1) return [0];
  let result = [0, 1];
  for (let i = 1; i < n - 1; i++) {
    result.push(result[i - 1] + result[i]);
  }
  return result;
}

function fibsRec(n) {
  if (n <= 0) return [0];
  if (n === 1) return [0, 1];
  else {
    let result = fibsRec(n - 1);
    result.push(result[result.length - 1] + result[result.length - 2]);
    return result;
  }
}

export { fibs, fibsRec }