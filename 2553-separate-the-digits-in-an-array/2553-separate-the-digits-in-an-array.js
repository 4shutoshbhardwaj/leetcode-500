/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    let arr=[];
    for(let i=0;i<nums.length;i++){
        let s=""+nums[i];
        arr=([...arr,...s.split("")]);
    }
    for(let i=0;i<arr.length;i++){
        arr[i]=+arr[i];
    }
    // console.log(arr);
    return arr;
};