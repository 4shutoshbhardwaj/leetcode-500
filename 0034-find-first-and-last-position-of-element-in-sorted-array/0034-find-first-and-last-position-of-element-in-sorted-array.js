/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let i=0;
    let j=nums.length-1;
    let result=[-1,-1];
    while(i<=j){
        let mid=i+Math.floor((j-i)/2);
        if(nums[mid]==target&&nums[mid-1]!=target){
            result=[];
            result.push(mid);
            break;
        }
        if(nums[mid]<target){
            i=mid+1;
        }else if(nums[mid]>target){
            j=mid-1;
        }
        if(nums[mid]==target&&nums[mid-1]==target){
            j=mid-1;
        }
    }
    i=0;
    j=nums.length-1;
    while(i<=j){
        let mid=i+Math.floor((j-i)/2);
        if(nums[mid]==target&&nums[mid+1]!=target){
            result.push(mid);
            break;
        }
        if(nums[mid]<target){
            i=mid+1;
        }else if(nums[mid]>target){
            j=mid-1;
        }
        if(nums[mid]==target&&nums[mid+1]==target){
            i=mid+1;
        }
    }
    return result;
};