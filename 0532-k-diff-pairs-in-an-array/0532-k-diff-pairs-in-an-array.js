/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    nums.sort((a,b)=>a-b);
    let obj={};
    let pair=0;
    for(let i=0;i<nums.length;i++){
        let l=0;
        let r=nums.length-1;
        let n=nums[i]+k;
        while(l<=r){
            let m=l+Math.floor((r-l)/2);
            if(n==nums[m]&&i!=m){
                let min=Math.min(nums[i],nums[m]);
                let max=Math.max(nums[i],nums[m]);
                let s=min+""+max;
                if(obj[s]==undefined){
                    obj[s]=1;
                    pair++;
                }
                break;
            }
            if(n>nums[m]){
                l=m+1;
            }else{
                r=m-1;
            }
        }
    }
    console.log(pair,obj);
    return pair;
};