/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let n=Math.floor(nums.length/3);
    let obj={};
    for(let i=0;i<nums.length;i++){
        let s=nums[i];
        if(obj[s]==undefined){
            obj[s]=1;
        }else{
            obj[s]++;
        }
    }
    let res=[];
    for(let o in obj){
        if(obj[o]>n){
            res.push(+o);
        }
    }
    console.log(res);
    return res;
};