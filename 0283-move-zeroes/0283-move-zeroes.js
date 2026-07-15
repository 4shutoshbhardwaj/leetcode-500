/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let arr=[];
    let len=nums.length;
    for(let i=0;i<len;i++){
        arr.push(nums.pop());
    }
    let count=0;
    len=arr.length;
    for(let j=len-1;j>=0;j--){
        if(arr[j]==0){
            count++;
            arr.pop();
        }else{
            nums.push(arr.pop());
        }
    }
    for(let k=0;k<count;k++){
        nums.push(0);
    }
};