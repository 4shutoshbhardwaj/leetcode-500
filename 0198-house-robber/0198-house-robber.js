/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let arr=Array(nums.length).fill(-1);
    function func(i){
        if(i>=nums.length)return 0;
        if(arr[i]!=-1)return arr[i];
        let a=nums[i]+func(i+2);
        let b=func(i+1);
        arr[i]=Math.max(a,b);
        return arr[i];
    }
    return func(0);
};