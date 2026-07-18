/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let pos=[];
    let neg=[];
    for(let i=0;i<nums.length;i++){
        if(nums[i]>0){
            pos.push(nums[i]);
        }else if(nums[i]<0){
            neg.push(nums[i]);
        }
    }
    let arr=[];
    let j=0;
    for(let i=0;i<pos.length;i++){
        arr.push(pos[i]);
        arr.push(neg[j]);
        j++;
    }
    return arr;
};