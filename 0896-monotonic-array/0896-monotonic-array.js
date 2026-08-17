/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    if(nums.length==1||nums.length==2)return true;
    if(nums[0]<nums[nums.length-1]){
        for(let i=0;i<nums.length;i++){
            if(nums[i]>nums[i+1])return false;
        }
    }else if(nums[0]>nums[nums.length-1]){
        for(let i=nums.length-1;i>=0;i--){
            if(nums[i]>nums[i-1])return false;
        }
    }else{
        for(let i=0;i<nums.length-1;i++){
            if(nums[i]!=nums[i+1])return false;
        }
    }
    return true;
};