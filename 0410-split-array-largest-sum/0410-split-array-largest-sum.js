/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function(nums, k) {
    let i=Math.max(...nums);
    let j=0;
    for(let i=0;i<nums.length;i++){
        j+=nums[i];
    }
    let ans=0;
    while(i<=j){
        let m=i+Math.floor((j-i)/2);
        let count=1;
        let n=0;
        for(let k=0;k<nums.length;k++){
            if((n+nums[k])<=m){
                n+=nums[k];
            }else{
                count++;
                n=nums[k];
            }
        }
        if(count<=k){
            j=m-1;
            ans=m;
        }else{
            i=m+1;
        }
    }
    return ans;
};