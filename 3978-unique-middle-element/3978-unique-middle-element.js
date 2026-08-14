/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMiddleElementUnique = function(nums) {
    let mid=nums[Math.floor(nums.length/2)];
    let count=0;
    for(let i=0;i<nums.length;i++){
        if(mid==nums[i]){
            count++;
        }
    }
    return count>1?false:true;
};