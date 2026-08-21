/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let obj={};
    for(let i=0;i<nums.length;i++){
        // console.log(obj);
        if(obj[nums[i]])return true;
        if(obj[nums[i]]==undefined){
            obj[nums[i]]=1;
        }
        if(i>=k){
            delete obj[nums[i-k]];
        }
    }
    return false;
};