/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    let flag=false;
    if(nums[0]<nums[nums.length-1]){
        for(let i=0;i<nums.length;i++){
            if(nums[i]>nums[i+1]){
                return false;
            }
        }
    }else{
        for(let i=0;i<nums.length;i++){
            if(nums[i]>nums[i+1]&&!flag){
                flag=true;
            }else if(nums[i]>nums[i+1]&&flag){
                return false;
            }
        }
    }
    return true;
};