/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a,b)=>a-b);
    let min=nums[0]+nums[1]+nums[2];
    for(let i=0;i<nums.length-2;i++){
        let l=i+1;
        let r=nums.length-1;
        while(l<r){
            let num=nums[i]+nums[l]+nums[r];
            if(Math.abs(num-target)<Math.abs(min-target)){
                min=num;
            }
            if(target<(nums[i]+nums[l]+nums[r])){
                r--;
            }else{
                l++;
            }
        }
    }
    return min;
};