/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let obj={};
    for(let i=0;i<nums.length;i++){
        let s=nums[i];
        if(obj[s]==undefined){
            obj[s]=1;
        }else{
            obj[s]++;
        }
    }
    let res;
    for(let o in obj){
        if(obj[o]==1){
            res=o;
        }
    }
    return +res;
};