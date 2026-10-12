/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSum = function(nums, k) {
    let count=Array(31).fill(0);
    let mod=1000000007n;
    for(let i=0;i<nums.length;i++){
        for(let bit=0;bit<31;bit++){
            if((nums[i] & (1<<bit))!=0){
                count[bit]++;
            }
        }
    }
    let ans=0n;
    for(let i=0;i<k;i++){
        let num=0;
        for(let bit=0;bit<31;bit++){
            if(count[bit]>0){
                num|=(1<<bit);
                count[bit]--;
            }
        }
        let val=BigInt(num);
        ans=(ans+val*val)%mod;
    }
    return Number(ans);
};