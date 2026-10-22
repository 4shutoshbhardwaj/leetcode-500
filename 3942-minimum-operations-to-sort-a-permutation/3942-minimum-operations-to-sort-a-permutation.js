/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let zero=-1;
    let t=true;
    for(let i=0;i<nums.length;i++){
        if(nums[i]==0){
            zero=i;
        }
        if(nums[i]>nums[i+1]&&i<nums.length-1){
            t=false;
        }
    }
    if(t)return 0;
    let ar1=nums.slice(zero);
    ar1.push(...nums.slice(0,zero));
    let ar2=nums.slice(zero+1);
    ar2.push(...nums.slice(0,zero+1));
    let t1=true;
    let t2=true;
    for(let i=0;i<ar1.length-1;i++){
        if(ar1[i]>ar1[i+1]){
            t1=false;
        }
    }
    for(let i=0;i<ar2.length-1;i++){
        if(ar2[i]<ar2[i+1]){
            t2=false;
        }
    }
    // console.log(t1,t2,ar1,ar2);
    let ans=Infinity;
    if(t1){
        ans=Math.min(ans,zero);
        ans=Math.min(ans,nums.length-zero+2);
    }
    if(t2){
        ans=Math.min(ans,zero+2);
        ans=Math.min(ans,nums.length-zero);
    }
    return ans===Infinity?-1:ans;
};