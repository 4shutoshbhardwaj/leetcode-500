/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function(nums, k) {
    function func(k){
        let i=0;
        let j=0;
        let obj={};
        let ans=0;
        let count=0;
        while(j<nums.length){
            if(obj[nums[j]]==undefined){
                obj[nums[j]]=1;
                count++;
            }else{
                obj[nums[j]]++;
            }
            j++;
            while(count>k){
                obj[nums[i]]--;
                if(obj[nums[i]]==0){
                    delete obj[nums[i]];
                    count--;
                }
                i++;
            }
            ans+=j-i;
        }
        return ans;
    }
    return func(k)-func(k-1);
};