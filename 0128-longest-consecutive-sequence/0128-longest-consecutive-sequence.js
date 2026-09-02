/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let obj={};
    for(let i=0;i<nums.length;i++){
        if(obj[nums[i]]==undefined){
            obj[nums[i]]=1;
        }
    }
    let max=0;
    let rotate=0;
    for(let i=0;i<nums.length;i++){
        if(rotate>=nums.length)return max;
        if(obj[nums[i]-1]==undefined){
            let n=nums[i];
            let count=0;
            while(obj[n]!=undefined){
                rotate++;
                count++;
                n++;
            }
            max=Math.max(max,count);
        }
    }
    return max;

};