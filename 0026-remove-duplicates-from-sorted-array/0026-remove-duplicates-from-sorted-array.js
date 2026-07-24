/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let arr=[];
    let len=nums.length;
    for(let i=0;i<len;i++){
        arr.push(nums.pop());
    }
    len=arr.length;
    for(let i=0;i<len;i++){
        if(nums[nums.length-1]!==arr[arr.length-1]){
            nums.push(arr.pop());
        }else{
            arr.pop();
        }
    }
};