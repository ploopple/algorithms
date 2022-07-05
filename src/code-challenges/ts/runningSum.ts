function runningSum(nums: number[]): number[] {
  let n: number = 0;
  const result: number[] = [];
  for (let i: number = 0; i < nums.length; i++) {
    for (let j: number = nums.length - i; j > 0; j--) {
      //   else n += nums[j] + nums[j - 1];
      //   if (!nums[j - 1]) console.log(nums[i]);
      console.log("i: " + nums[i], "j: " + nums[j]);
    }
    // result.unshift(nums[i]);
    // n = 0;
  }
  return result;
}

console.log(runningSum([1, 2, 3, 4]));
// console.log(runningSum([1, 1, 1, 1]));
