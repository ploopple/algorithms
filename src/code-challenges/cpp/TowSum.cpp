#include <iostream>
#include <string>
#include <vector>

using namespace std;

vector<int> twoSum(vector<int>& nums, int target) {
    vector<int> result;
    for(int i = 0; i <= nums.size(); i++){
        for(int j = i + 1; j <= nums.size(); j++){
            if((nums[i] + nums[j]) == target){

                result.push_back(i);
                result.push_back(j);

                return result;
            }
        }
    }
    return result;
}

int main()
{
    vector<int> arr;
    
    arr.push_back(-4);
    arr.push_back(-2);
    arr.push_back(-3);
    arr.push_back(-4);
    arr.push_back(-5);

    vector<int> funcResult = twoSum(arr,-8);
    // if(sizeof(funcResult) / 8 > 0){
        cout << funcResult[0] << endl << funcResult[1] << endl;
    // }else{
        // cout << funcResult[0] << endl;
    // }
    // bool s = (arr[2] + arr[4]) == -84; 
        // cout << arr.size() << endl;
    
    return 0;
}
