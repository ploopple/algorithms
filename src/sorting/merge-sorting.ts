const mergeSortingMain = () => {
  const arrLength: number = 50;
  const arrOfNumbersToSort: number[] = [];

  for (let v = 0; v < arrLength; v++) {
    arrOfNumbersToSort.push(Math.round(Math.random() * arrLength));
  }

  function MergeSort(items: number[]): number[] {
    return divide(items);
  }

  function divide(items: number[]): number[] {
    var halfLength = Math.ceil(items.length / 2);
    console.log(halfLength);
    var low = items.slice(0, halfLength);
    var high = items.slice(halfLength);
    if (halfLength > 1) {
      low = divide(low);
      high = divide(high);
    }
    return combine(low, high);
  }

  function combine(low: number[], high: number[]): number[] {
    var indexLow = 0;
    var indexHigh = 0;
    var lengthLow = low.length;
    var lengthHigh = high.length;
    var combined = [];
    while (indexLow < lengthLow || indexHigh < lengthHigh) {
      var lowItem = low[indexLow];
      var highItem = high[indexHigh];
      if (lowItem !== undefined) {
        if (highItem === undefined) {
          combined.push(lowItem);
          indexLow++;
        } else {
          if (lowItem <= highItem) {
            combined.push(lowItem);
            indexLow++;
          } else {
            combined.push(highItem);
            indexHigh++;
          }
        }
      } else {
        if (highItem !== undefined) {
          combined.push(highItem);
          indexHigh++;
        }
      }
    }
    return combined;
  }
  console.log(arrOfNumbersToSort);
  console.log(MergeSort(arrOfNumbersToSort));
};

mergeSortingMain();
