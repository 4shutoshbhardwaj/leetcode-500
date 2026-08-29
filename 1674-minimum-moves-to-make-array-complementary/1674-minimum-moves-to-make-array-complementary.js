/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var minMoves = function(nums, limit) {
    let n=nums.length;
    let diff=new Array(2*limit+2).fill(0);
    for(let i=0;i<n/2;i++){
        let x=Math.min(nums[i],nums[n-1-i]);
        let y=Math.max(nums[i],nums[n-1-i]);
        diff[2]+=2;
        diff[x+1]-=1;
        diff[x+y]-=1;
        diff[x+y+1]+=1;
        diff[y+limit+1]+=1;
    }
    let ans=Infinity;
    let moves=0;
    for(let i=2;i<=2*limit;i++){
        moves+=diff[i];
        ans=Math.min(ans,moves);
    }
    return ans;
};