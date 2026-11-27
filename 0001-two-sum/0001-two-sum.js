/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        nums[i]=[nums[i],i];
    }
    nums.sort((a,b)=>a[0]-b[0]);
    console.log(nums);
    let i=0;
    let j=nums.length-1;
    while(i<j){
        console.log(nums[i][0]+nums[j],i,j)
        if((nums[i][0]+nums[j][0])>target){
            j--;
        }else if((nums[i][0]+nums[j][0])<target){
            i++;
        }else if((nums[i][0]+nums[j][0])==target){
            return [nums[i][1],nums[j][1]];
        }
    }
};