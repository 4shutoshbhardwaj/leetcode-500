/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let arr=[];
    nums.sort((a,b)=>a-b);
    for(let i=0;i<nums.length-1;i++){
        if(nums[i]==nums[i+1]){
            arr.push(nums[i]);
        }
    }
    return arr;
};