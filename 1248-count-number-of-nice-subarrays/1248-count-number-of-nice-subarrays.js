/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    let arr=[];
    for(let i=0;i<nums.length;i++){
        if(nums[i]%2==0){
            arr.push(0);
        }else{
            arr.push(1);
        }
    }
    function func(k){
        let i=0;
        let sum=0;
        let ans=0;
        for(let j=0;j<arr.length;j++){
            sum+=arr[j];
            while(sum>k){
                sum-=arr[i];
                i++;
            }
            ans+=j-i+1;
        }
        return ans;
    }
    return func(k)-func(k-1);
};