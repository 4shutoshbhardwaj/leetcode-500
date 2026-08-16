/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let i=0;
    let j=0;
    let n=k;
    let max=0;
    while(j<nums.length){
        // console.log(i,j,nums[i],nums[j]);
        if(nums[j]==0&&n>0){
            n--;
            j++;
        }else if(nums[j]==1){
            j++
        }else if(n==0&&nums[i]==1){
            max=Math.max(max,j-i);
            i++;
        }else if(n==0&&nums[i]==0){
            max=Math.max(max,j-i);
            n++;
            i++;
        }
    }
    max=Math.max(max,j-i);
    // console.log(max);
    return max;
};