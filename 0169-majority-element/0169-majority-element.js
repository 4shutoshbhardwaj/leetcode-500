/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let obj={};
    for(let i=0;i<nums.length;i++){
        let s=nums[i];
        if(obj[s]==undefined){
            obj[s]=1;
        }else{
            obj[s]++;
        }
    }
    let max=0;
    let ele;
    for(let o in obj){
        if(max<obj[o]){
            max=obj[o];
            ele=o;
        }
    }
    return +ele;
};