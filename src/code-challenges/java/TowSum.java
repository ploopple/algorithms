class Solution {
    public static int[] twoSum(int[] nums, int target) {
        for(int i = 0; i < nums.length; i++){
            for(int j = 0; j < nums.length; j++){
                if(i == j){
                    continue;
                }
                if(nums[i] + nums[j] == target){
                    return new int[]{i, j};
                }
            }
        }
        return new int[]{};
    }

    public static void main(String[] args) {
        int[] result = twoSum(new int[]{2,7,11,15},22);
        if(result.length > 0){

            System.out.printf("%s %s %n",result[0],result[1]);
        }else{
            System.out.printf("emty %n");

        }
    }
}