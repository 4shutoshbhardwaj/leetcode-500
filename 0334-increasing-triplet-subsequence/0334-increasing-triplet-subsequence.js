/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let n1=Infinity,n2=Infinity;
    for(let i=0;i<nums.length;i++){
        if(n1>=nums[i]){
            n1=nums[i];
        }else if(n2>=nums[i]){
            n2=nums[i];
        }else{
            return true;
        }
    }
    return false;
};