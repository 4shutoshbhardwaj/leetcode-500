/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let i=0;
    let j=nums.length-1;
    while(i<j){
        let m=i+Math.floor((j-i)/2);
        if(nums[m]>nums[j]){
            i=m+1;
        }else{
            j=m;
        }
    }
    return nums[i];
};