const findLowestTwo = (arr) => {

  let min1 = arr[0];
  let min2 = arr[1];
  let index1 = 0;
  let index2 = 1;

  if (min1 > min2) {
    let temp = min1;
    min1 = min2;
    min2 = temp;

    index1 = 1;
    index2 = 0;
  }

  for (var i = 2; i < arr.length; i++) {
    if (arr[i] < min1) {
      let temp = min1;
      min1 = arr[i];
      min2 = temp;
      index2 = index1;
      index1 = i;
    } else if (arr[i] < min2) {
      min2 = arr[i];
      index2 = i;
    }
  }

  return [index1, index2];
};

export default findLowestTwo;