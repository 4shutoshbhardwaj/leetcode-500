/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let i=0;
    let arr=[];
    nums.sort((a,b)=>a-b);
    function func(i,subArr){
        // if(i==nums.length){
            arr.push([...subArr]);
        //     return;
        // }
        if(i>=nums.length)return;
        for(let j=i;j<nums.length;j++){
            if(j>i&&nums[j-1]==nums[j])continue;
            subArr.push(nums[j]);
            func(j+1,subArr);
            subArr.pop();
        }
    }
    func(0,[]);
    return arr;
};