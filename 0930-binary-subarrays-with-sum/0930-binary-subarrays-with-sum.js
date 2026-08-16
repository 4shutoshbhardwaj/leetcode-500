/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums,goal) {
    function func(goal){
        if(goal<0)return 0;
        let i=0;
        let sum=0;
        let count=0;
        for(let j=0;j<nums.length;j++){
            sum+=nums[j];
            while(sum>goal){
                sum-=nums[i];
                i++;
            }
            count+=j-i+1;
        }
        return count;
    }
    return func(goal)-func(goal-1);
};