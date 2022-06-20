const bubbleSortingMain = () => {
  const arrLength: number = 100;
  const arrOfNumbersToSort: number[] = [];

  for (let v = 0; v < arrLength; v++) {
    arrOfNumbersToSort.push(Math.round(Math.random() * arrLength));
  }
  const bubbleSortingAlgorithm = (arr: number[]): number[] => {
    const result: number[] = arr;
    for (let j = 0; j < result.length; j++) {
      for (let i = result.length - 1; i > 0; i--) {
        if (result[i] < result[i - 1]) {
          const temp: number = result[i];
          result[i] = result[i - 1];
          result[i - 1] = temp;
        }
      }
    }
    return result;
  };

  console.log(arrOfNumbersToSort);
  console.log(bubbleSortingAlgorithm(arrOfNumbersToSort));
};

bubbleSortingMain();
