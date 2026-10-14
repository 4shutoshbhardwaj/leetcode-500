/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if(nums.length==1)return 0;
    let i=0;
    let j=nums.length-1;
    while(i<=j){
        let m=i+Math.floor((j-i)/2);
        if(m==nums.length-1&&nums[m]>nums[m-1]){
            return m;
        }
        if(m==0&&nums[m]>nums[m+1]){
            return m;
        }
        if(nums[m]>nums[m+1]&&nums[m]>nums[m-1]){
            return m;
        }
        if(nums[m]<nums[m+1]){
            i=m+1;
        }else if(nums[m]<nums[m-1]){
            j=m-1;
        }
    }
};