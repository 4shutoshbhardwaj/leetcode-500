/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if(nums[0]<nums[nums.length-1])return nums[0];
    let i=0;
    let j=nums.length-1;
    while(i<=j){
        let m=i+Math.floor((j-i)/2);
        if(m==0&&m==nums.length-1){
            return nums[m];
        }
        if(m==0&&nums[m]<nums[m+1]){
            return nums[m];
        }
        if(m==nums.length-1&&nums[m]<nums[m-1]){
            return nums[m];
        }
        if(nums[m]<nums[m+1]&&nums[m]<nums[m-1]){
            return nums[m];
        }
        if(nums[m]>nums[j]){
            i=m+1;
        }else if(nums[i]>nums[m]){
            j=m-1;
        }else{
            j=m-1;
        }
    }
};