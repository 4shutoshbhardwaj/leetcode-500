/**
 * @param {number[]} nums
 * @return {number}
 */
var sortPermutation = function(nums) {
    let ans=-1;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=i){
            ans=ans&i;
        }
    }
    return Math.max(ans,0);
};