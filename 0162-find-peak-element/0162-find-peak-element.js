/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let i=0;
    let j=nums.length-1;
    if(nums.length==1)return 0;
    if(nums.length==2)return nums[0]>nums[1]?0:1;
    while(i<=j){
        let mid=i+Math.floor((j-i)/2);
        if((nums[mid]>nums[mid+1]&&nums[mid]>nums[mid-1])||(mid==0&&nums[mid]>nums[mid+1])||(mid==nums.length-1&&nums[mid]>nums[mid-1])){
            return mid;
        }
        console.log(i,mid,j);
        if(nums[mid]<nums[mid-1]){
            j=mid-1;
        }else if(nums[mid]<nums[mid+1]){
            i=mid+1;
        }
    }
};