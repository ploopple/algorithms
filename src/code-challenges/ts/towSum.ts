const twoSum = (nums: number[], target: number): number[] => {
  let result: number[] = [];
  for (let i: number = 0; i < nums.length; i++) {
    for (let j: number = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target && i !== j) {
        console.log(i, j);
        result = [j, i];
        console.log(nums, result, [nums[result[0]], nums[result[1]]]);
        return result;
      }
    }
  }
  return result;
};

twoSum([3, 2, 4, 2], 6);
