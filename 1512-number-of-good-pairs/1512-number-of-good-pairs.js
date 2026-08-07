/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let count=0;
    for(let i in nums){
        for(let j in nums){
            if(nums[j]==nums[i]&&i<j){
                count++;
            }
        }
    }
    return count;
};