/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if(k>nums.length){
        let mod=k%nums.length;
        k=mod;
    }
    let subArr=nums.splice(nums.length-k,k);
    nums.unshift(...subArr);
};