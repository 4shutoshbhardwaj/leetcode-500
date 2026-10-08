/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums,goal) {
    function func(goal){
        if(goal<0)return 0;
        let l=0;
        let r=0;
        let sum=0;
        let count=0;
        while(r<nums.length){
            sum+=nums[r];
            while(sum>goal){
                sum-=nums[l];
                l++;
            }
            count+=r-l+1;
            r++;
        }
        return count;
    }
    return func(goal)-func(goal-1);
};