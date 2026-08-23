/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let ans=[];
    let counter=1;
    nums.sort((a,b)=>a-b);
    for(let i=0;i<nums.length;i++){
        if(nums[i]==nums[i+1]){
            ans[0]=nums[i];
        }
        if(nums[i]==counter)counter++;
    }
    ans[1]=counter;
    return ans;
};