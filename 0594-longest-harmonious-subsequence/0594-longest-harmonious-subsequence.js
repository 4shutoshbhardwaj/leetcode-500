/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    let obj={};
    for(let i=0;i<nums.length;i++){
        if(obj[nums[i]]==undefined){
            obj[nums[i]]=1;
        }else{
            obj[nums[i]]++;
        }
    }
    let maxLen=0;
    for(let i in obj){
        if(obj[Number(i)+1]!=undefined){
            maxLen=Math.max(maxLen,obj[Number(i)+1]+obj[Number(i)]);
        }
    }
    return maxLen;
};