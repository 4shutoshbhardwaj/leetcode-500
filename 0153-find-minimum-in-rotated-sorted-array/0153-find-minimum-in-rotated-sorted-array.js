/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let i=0;
    let j=nums.length-1;
    let min=nums[i];
    while(i<=j){
        let mid=Math.floor((j-i)/2)+i;
        if(nums[i]<=nums[mid]){
            i=mid+1;
        }else{
            j=mid;
        }
        if(min>nums[i]){
            min=nums[i];
        }
    }
    return +min;
};