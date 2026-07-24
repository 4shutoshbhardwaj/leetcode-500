/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let i=0;
    let j=nums.length-1;
    while(i<=j){
        let mid=i+Math.floor((j-i)/2);
        if(nums[mid]==target){
            return mid;
        }
        if(nums[mid]>target&&mid==0)return 0;
        if((nums[mid]<target&&nums[mid+1]>target)||(nums[mid]<target&&mid==nums.length-1))return mid+1;
        if(nums[mid]<target){
            i=mid+1;
        }else{
            j=mid-1;
        }
    }
    return -1;
};