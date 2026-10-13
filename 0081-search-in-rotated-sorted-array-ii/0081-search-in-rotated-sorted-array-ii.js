/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    function func(i,j){
        if(i>j)return false;
        while(i<=j){
            let m=i+Math.floor((j-i)/2);
            if(nums[m]==target){
                return true;
            }
            if(nums[m]>nums[i]){
                if(nums[i]<=target&&target<nums[m]){
                    j=m-1;
                }else{
                    i=m+1;
                }
            }else if(nums[m]<nums[j]){
                if(nums[m]<target&&target<=nums[j]){
                    i=m+1;
                }else{
                    j=m-1;
                }
            }else{
                let a=func(m+1,j);
                let b=func(i,m-1);
                return a||b;
            }
        }
        return false;
    }
    return func(0,nums.length-1);
};