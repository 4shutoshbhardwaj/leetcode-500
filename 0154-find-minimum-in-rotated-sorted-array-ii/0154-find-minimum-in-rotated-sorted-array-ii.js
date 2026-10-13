/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if(nums.length==1)return nums[0];
    function func(i,j){
        // if(i>=j)return undefined;
        while(i<j){
            let m=i+Math.floor((j-i)/2);
            if(nums[m]>nums[j]){
                i=m+1;
            }else if(nums[m]<nums[j]){
                j=m;
            }else{
                let a=func(m+1,j);
                let b=func(i,m);
                if(nums[a]<nums[b]){
                    return a;
                }else if(nums[a]>nums[b]){
                    return b;
                }else return a;
            }
        }
        return i;
    }
    return nums[func(0,nums.length-1)];
};