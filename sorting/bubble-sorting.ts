const BubbleSortingMain = (): void => {
  const arrLength: number = 10;
  const arrOfNumbersToSort: number[] = [];

  for (let v = 0; v < arrLength; v++) {
    arrOfNumbersToSort.push(Math.round(Math.random() * arrLength));
  }

  const BubbleortingAlgorithm = (arr: number[]): number[] => {
    const result: number[] = arr;

    for (let i: number = result.length - 1; i >= 0; i--) {
      if (result[i] > result[i - 1]) {
        console.log(result[i], result[i - 1]);
        const temp: number = result[i];

        result[i - 1] = result[i];
        // result[i] = result[i];
      }
    }

    result.reverse();
    return result;
  };

  console.log(arrOfNumbersToSort);
  console.log("--------------------");
  console.log("-------------------");
  console.log(BubbleortingAlgorithm(arrOfNumbersToSort));
};

BubbleSortingMain();
