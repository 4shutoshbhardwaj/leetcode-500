/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let result=[];
    let obj={};
    nums.sort((a,b)=>a-b);
    console.log(nums);
    for(let l=0;l<nums.length;l++){
        for(let i=l+1;i<nums.length;i++){
            let j=i+1;
            let k=nums.length-1;
            while(j<k){
                if(nums[i]+nums[j]+nums[k]+nums[l]==target){
                    s=""+nums[l]+""+nums[i]+""+nums[j]+""+nums[k];
                    if(obj[s]==undefined){
                        result.push([nums[l],nums[i],nums[j],nums[k]]);
                        obj[s]=1;
                    }
                    j++;
                    k--;
                }else if(nums[i]+nums[j]+nums[k]+nums[l]>target){
                    k--;
                }else if(nums[i]+nums[j]+nums[k]+nums[l]<target){
                    j++;
                }
            }
        }
    }
    return result;
};