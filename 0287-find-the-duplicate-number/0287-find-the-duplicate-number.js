/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    for(let i=0;i<nums.length;i++){
        let n=Math.abs(nums[i]);
        if(nums[n-1]<0)return Math.abs(nums[i]);
        nums[n-1]=0-nums[n-1];
    }
};