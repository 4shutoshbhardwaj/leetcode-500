/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let i=0;
    let j=nums.length-1;
    let ans=[-1,-1];
    while(i<=j){
        let m=i+Math.floor((j-i)/2);
        if(target==nums[m]){
            ans[0]=m;
            j=m-1;
        }else if(nums[m]>target){
            j=m-1;
        }else{
            i=m+1;
        }
    }
    i=0;
    j=nums.length-1;
    while(i<=j){
        let m=i+Math.floor((j-i)/2);
        if(target==nums[m]){
            ans[1]=m;
            i=m+1;
        }else if(nums[m]>target){
            j=m-1;
        }else{
            i=m+1;
        }
    }
    return ans;
};