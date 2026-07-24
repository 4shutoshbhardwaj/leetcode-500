/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let count=0;
    let len=nums.length;
    let arr=[];
    for(let i=0;i<len;i++){
        if(nums[nums.length-1]==0){
            count++;
            nums.pop();
        }else{
            arr.push(nums.pop());
        }
    }
    len=arr.length;
    for(let i=0;i<len;i++){
        nums.push(arr.pop());
    }
    for(let i=0;i<count;i++){
        nums.push(0);
    }
};