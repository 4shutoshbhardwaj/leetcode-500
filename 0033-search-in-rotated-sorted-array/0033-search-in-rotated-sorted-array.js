/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if(nums[0]<nums[nums.length-1]){
        let i=0;
        let j=nums.length-1;
        while(i<=j){
            let m=i+Math.floor((j-i)/2);
            if(nums[m]==target){
                return m;
            }
            if(nums[m]>target){
                j=m-1;
            }else{
                i=m+1;
            }
        }
    }else{
        let i=0;
        let j=nums.length-1;
        while(i<=j){
            let m=i+Math.floor((j-i)/2);
            if(nums[m]==target){
                return m;
            }
            // console.log(nums[i],nums[m],nums[j]);
            if(nums[m]>=nums[i]){
                if(target<nums[m]&&target>=nums[i]){
                    j=m-1;
                }else{
                    i=m+1;
                }
            }else{
                if(target>nums[m]&&target<=nums[j]){
                    i=m+1;
                }else{
                    j=m-1;
                }
            }
        }
    }
    return -1;
};