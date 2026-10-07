/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let i=0;
    let sum=0;
    let max=-Infinity;
    while(i<k){
        sum+=nums[i];
        i++;
    }
    let j=0;
    max=Math.max(max,(sum/k));
    while(i<nums.length){
        sum-=nums[j];
        j++;
        sum+=nums[i];
        i++;
        max=Math.max(max,(sum/k));
    }
    return max;
};