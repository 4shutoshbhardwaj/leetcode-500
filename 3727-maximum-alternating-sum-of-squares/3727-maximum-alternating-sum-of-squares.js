/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function(nums) {
    for(let i=0;i<nums.length;i++){
        nums[i]=nums[i]*nums[i];
    }
    nums.sort((a,b)=>a-b);
    let ar1=nums.slice(0,Math.floor(nums.length/2));
    let ar2=nums.slice(Math.floor(nums.length/2));
    let i=0;
    let sum=0;
    while(i<ar1.length){
        sum+=(ar2[i]-ar1[i]);
        i++;
    }
    while(i<ar2.length){
        sum+=ar2[i];
        i++;
    }
    return sum;
};