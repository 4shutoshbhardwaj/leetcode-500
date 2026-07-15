/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let len=nums.length;
    let red=0;
    let white=0;
    let blue=0;
    for(let i=len-1;i>=0;i--){
        if(nums[i]==0){
            red++;
        }else if(nums[i]==1){
            white++;
        }else if(nums[i]==2){
            blue++;
        }
        nums.pop();
    }
    console.log(red, white, blue);
    for(let i=0;i<red;i++){
        nums.push(0);
    }
    for(let i=0;i<white;i++){
        nums.push(1);
    }
    for(let i=0;i<blue;i++){
        nums.push(2);
    }
};