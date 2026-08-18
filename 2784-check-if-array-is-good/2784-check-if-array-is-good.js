/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function(nums) {
    nums.sort((a,b)=>a-b);
    let h=nums.length-1;
    let n=1;
    for(let i=0;i<h;i++){
        if(nums[i]!=n){
            return false;
        }
        n++;
    }
    if(nums[nums.length-1]!=nums[nums.length-2]){
        return false;
    }
    return true;
};