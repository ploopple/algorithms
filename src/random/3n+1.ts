const number: number = 2748294759275933;

const result: number[] = [];
const func = (n: number): number[] => {
  result.push(n);
  if (n === 1) {
    console.log(result.length - 1);
    return result;
  } else if (n % 2 === 0) {
    n = n / 2;
    func(n);
  } else if (n % 2 === 1) {
    n = n * 3 + 1;
    func(n);
  }

  return result;
};
console.log(func(number));
