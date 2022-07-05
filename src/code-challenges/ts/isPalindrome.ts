function isPalindrome(x: number): boolean {
  const xOriginValue = x;

  let result: boolean = false;

  //   if (x < 0) {
  //     result = false;
  //     console.log(result);

  //     return result;
  //   }
  //   if (x <= 9) {
  //     result = true;
  //     console.log(result);

  //     return result;
  //   }

  if (x < 0 || (x % 10 == 0 && x != 0)) {
    return false;
  }

  let revertedNumber: number = 0;
  while (x > revertedNumber) {
    revertedNumber = revertedNumber * 10 + (x % 10);
    x /= 10;
  }
  //   if (revertedNumber <= 9) {
  //     result = false;
  //     console.log(result);

  //     return result;
  //   }
  console.log(
    revertedNumber === xOriginValue / 10,
    revertedNumber,
    xOriginValue
  );
  result = revertedNumber === xOriginValue;
  console.log(result);
  return result;
}

isPalindrome(11);
