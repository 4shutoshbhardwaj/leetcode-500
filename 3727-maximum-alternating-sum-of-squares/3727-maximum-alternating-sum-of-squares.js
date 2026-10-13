/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function(nums) {
    for(let i=0;i<nums.length;i++){
        nums[i]=nums[i]*nums[i];
    }
    nums.sort((a,b)=>a-b);
    let i=0;
    let j=Math.floor(nums.length/2);
    let sum=0;
    while(i<Math.floor(nums.length/2)){
        sum+=(nums[j]-nums[i]);
        j++;
        i++;
    }
    while(j<nums.length){
        sum+=nums[j];
        j++;
    }
    return sum;
};