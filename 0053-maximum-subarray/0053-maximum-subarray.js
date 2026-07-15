/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // let max=-Infinity;
    // let sum=0;
    // for(let i=0;i<nums.length;i++){
    //     sum=0;
    //     if(nums[i]<=0)continue;
    //     for(let j=i;j<nums.length;j++){
    //         sum+=nums[j];
    //         if(sum>max){
    //             max=sum;
    //         }
    //     }
    // }
    // return max;
    function func(i,curSum){
        if(i==nums.length)return -Infinity;
        let max=Math.max(nums[i],curSum+nums[i]);
        return Math.max(max,func(i+1,max));
    }
    return func(0,0);
};