/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let ans=[];
    function func(i,subArr){
        if(i==nums.length){
            ans.push([...subArr]);
            return;
        }
        func(i+1,subArr);
        subArr.push(nums[i]);
        func(i+1,subArr);
        subArr.pop();
    }
    func(0,[]);
    // console.log(ans);
    return ans;
};