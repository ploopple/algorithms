namespace TowSum
{
    public class TowSums
    {
        public int[] TwoSum(int[] nums, int target) {
            for(int i = 0; i < nums.Length; i++){
                for(int j = 0; j < nums.Length; j++){
                    if(i == j){
                        continue;
                    }
                    if(nums[i] + nums[j] == target){
                        return new int[2]{i,j};
                    }
                }
            }
            return new int[0];
        }

        public void Main(){
            int[] result = this.TwoSum(new int[]{2,7,11,15},137);

            if(result.Length > 0){
                Console.WriteLine(result[0]);
                Console.WriteLine(result[1]);
            }else{
                Console.WriteLine("there are no two sum");
            }
        }
    }
}