/**
 * @param {number[]} nums
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
var sortTransformedArray = function(nums, a, b, c) {
    for(let i=0;i<nums.length;i++){
        nums[i]=(a*nums[i]*nums[i])+(b*nums[i])+c;
    }
    return nums.sort((a,b)=>a-b);
};