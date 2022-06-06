const arrLength: number = 123;
const arrOfNumbersToSort: number[] = [];
const isSmallToLarg: boolean = false;
const isLargToSmall: boolean = false;

for (let v = 0; v < arrLength; v++) {
  arrOfNumbersToSort.push(Math.round(Math.random() * arrLength));
}

const sortingAlgorithm = (arr: number[]): number[] => {
  const result: number[] = arr;

  for (let j = 0; j < arr.length; j++) {
    for (let i = j + 1; i < arr.length; i++) {
      if (isSmallToLarg) {
        if (result[j] > result[i]) {
          const temp: number = result[j];
          result[j] = result[i];
          result[i] = temp;
        }
      } else if (isLargToSmall) {
        if (result[j] < result[i]) {
          const temp: number = result[j];
          result[j] = result[i];
          result[i] = temp;
        }
      } else {
        return [-1];
      }
    }
  }

  return result;
};

console.log(arrOfNumbersToSort);
console.log("-------------------");
console.log("-------------------");
console.log(sortingAlgorithm(arrOfNumbersToSort));
