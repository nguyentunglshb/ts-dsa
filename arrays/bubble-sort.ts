const selectionSort = (array: Array<number>) => {
  const arrayLength = array.length;

  for (let i = 0; i <= arrayLength - 1; i++) {
    for (let j = 0; j <= arrayLength - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
};

const array = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

console.log(selectionSort(array));
