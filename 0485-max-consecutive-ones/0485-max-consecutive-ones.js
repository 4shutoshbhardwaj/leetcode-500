/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let count=0;
    let max=-Infinity;
    for(let i=0;i<nums.length;i++){
        if(nums[i]==1){
            count++;
        }else{
            max=max<count?count:max;
            count=0;
        }
    }
    max=max<count?count:max;
    // console.log(max,count);
    return max;
};