/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    if(nums[0]<nums[nums.length-1]){
        for(let i=0;i<nums.length;i++){
            if(nums[i]>nums[i+1])return false;
        }
        return true;
    }else{
        let flag=false;
        for(let i=0;i<nums.length;i++){
            if(nums[i]>nums[i+1]&&!flag){
                flag=!flag;
            }else if(nums[i]>nums[i+1]&&flag){
                return false;
            }
        }
        return true;
    }
};