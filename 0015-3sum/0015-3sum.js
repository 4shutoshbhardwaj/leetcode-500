/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let result=[];
    let obj={};
    nums.sort((a,b)=>a-b);
    console.log(nums);
    for(let i=0;i<nums.length;i++){
        let j=i+1;
        let k=nums.length-1;
        while(j<k){
            if(nums[i]+nums[j]+nums[k]==0){
                s=""+nums[i]+""+nums[j]+""+nums[k];
                if(obj[s]==undefined){
                    result.push([nums[i],nums[j],nums[k]]);
                    obj[s]=1;
                }
                j++;
                k--;
            }else if(nums[i]+nums[j]+nums[k]>0){
                k--;
            }else if(nums[i]+nums[j]+nums[k]<0){
                j++;
            }
        }
    }
    return result;
};