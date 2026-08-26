/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let p=1;
    let arr=[];
    for(let i=0;i<nums.length;i++){
        arr[i]=p;
        p*=nums[i];
    }
    p=1;
    for(let i=nums.length-1;i>=0;i--){
        arr[i]*=p;
        p*=nums[i];
    }
    return arr;
};