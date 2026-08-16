/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    let obj={0:1};
    let ans=0;
    let sum=0;
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
        if(obj[sum-goal]!=undefined){
            ans+=obj[sum-goal];
        }
        if(obj[sum]==undefined){
            obj[sum]=1;
        }else{
            obj[sum]++;
        }
    }
    return ans;
};