/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function(nums, k) {
    let i=Math.max(...nums);
    let j=nums.reduce((acc,i)=>acc+i,0);
    while(i<=j){
        let mid=Math.floor((j-i)/2)+i;
        let sum=0;
        let count=1;
        for(let num in nums){
            if(sum+nums[num]>mid){
                sum=nums[num];
                count++;
            }else{
                sum+=nums[num];
            }
        }
        // console.log(mid,count);
        if(count<=k){
            j=mid-1;
        }else{
            i=mid+1;
        }
    }
    // console.log(i,j);
    return i
};