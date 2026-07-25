/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let i=0;
    let j=nums.length-1;
    while(i<=j){
        let mid=i+Math.floor((j-i)/2);
        if(nums[i]>nums[j]){
            if(nums[i]<=nums[mid]){
                i=mid+1;
            }else{
                j=mid;
            }
        }else{
            return nums[i];
        }
    }
    // return false;
};