/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var obj={};
    for(var i=0;i<nums.length;i++){
        var s=nums[i];
        if(obj[s]==undefined){
            obj[s]=1;
        }else{
            return true;
        }
    }
    return false;
};