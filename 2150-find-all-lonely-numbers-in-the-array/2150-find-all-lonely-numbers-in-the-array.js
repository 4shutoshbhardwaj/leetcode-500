/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findLonely = function(nums) {
    let obj={};
    for(let i=0;i<nums.length;i++){
        if(obj[nums[i]]==undefined){
            obj[nums[i]]=1;
        }else{
            obj[nums[i]]++;
        }
    }
    let arr=[];
    // console.log(obj);
    for(let i=0;i<nums.length;i++){
        let s=nums[i];
        if(obj[s]==1&&obj[s+1]==undefined&&obj[s-1]==undefined){
            arr.push(nums[i]);
        }
    }
    return arr;
};