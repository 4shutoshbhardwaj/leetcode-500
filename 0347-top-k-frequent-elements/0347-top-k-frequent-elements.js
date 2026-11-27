/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let arr=[];
    nums.sort((a,b)=>a-b);
    count=1;
    for(let i=1;i<nums.length;i++){
        if(nums[i]==nums[i-1])count++;
        else{
            arr.push([nums[i-1],count]);
            count=1;
        }
    }
    arr.push([nums[nums.length-1],count]);
    arr.sort((a,b)=>b[1]-a[1]);
    let ans=[];
    for(let i=0;i<k;i++){
        ans.push(arr[i][0]);
    }
    return ans;
};