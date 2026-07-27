/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function(nums, threshold) {
    let i=0;
    let j=Math.max(...nums);
    let ans=-1;
    while(i<=j){
        let mid=i+Math.floor((j-i)/2);
        let count=0;
        for(let num in nums){
            count+=Math.ceil(nums[num]/mid);
        }
        if(count<=threshold){
            ans=mid;
            j=mid-1;
        }else{
            i=mid+1;
        }
    }
    return ans;
};