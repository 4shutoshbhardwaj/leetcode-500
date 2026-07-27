/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let i=0;
    let j=nums.length-1;
    while(i<j){
        let mid=(Math.floor((j-i)/2)+i)%2==1?Math.floor((j-i)/2)+i:Math.floor((j-i)/2)+i+1;
        if(nums[mid]==nums[mid+1]){
            j=mid-1;
        }else{
            i=mid+1;
        }
    }
    // console.log(i,nums[i]);
    return nums[i];
};