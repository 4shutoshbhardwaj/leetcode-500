/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let count=1;
    let num=nums[0];
    let max=0;
    for(let i=1;i<nums.length;i++){
        // console.log(nums[i],num,count);
        if(nums[i]>num){
            count++
        }else{
            max=Math.max(max,count);
            count=1;
        }
        num=nums[i];
    }
    max=Math.max(max,count);
    // console.log(max);
    return max;
};