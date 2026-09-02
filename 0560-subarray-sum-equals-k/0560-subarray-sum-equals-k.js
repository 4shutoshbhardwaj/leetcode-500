/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let j=0;
    let count=0;
    let sum=0;
    let obj={0:1};
    while(j<nums.length){
        sum+=nums[j];
        if(obj[sum-k]){
            count+=obj[sum-k];
        }
        if(obj[sum]==undefined){
            obj[sum]=1;
        }else{
            obj[sum]++;
        }
        j++;
    }
    return count;
};