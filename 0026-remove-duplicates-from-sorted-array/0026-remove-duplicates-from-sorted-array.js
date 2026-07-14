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
    // console.log(nums,arr);
    let prev=arr[arr.length-1];
    nums.push(prev);
    len=arr.length;
    for(let j=len-1;j>=0;j--){
        // console.log(prev,nums,arr);
        if(prev!=arr[j]){
            prev=arr[j];
            nums.push(arr.pop());
        }else{
            arr.pop();
        }
    }
};