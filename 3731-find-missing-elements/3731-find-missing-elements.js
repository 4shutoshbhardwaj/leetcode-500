/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    nums.sort((a,b)=>a-b);
    let min=nums[0];
    let max=nums[nums.length-1];
    let counter=min;
    let i=0;
    let arr=[];
    while(counter<max){
        if(counter==nums[i]){
            i++;
        }else if(counter<nums[i]){
            arr.push(counter);
        }
        counter++;
    }
    // console.log(arr);
    return arr;
};