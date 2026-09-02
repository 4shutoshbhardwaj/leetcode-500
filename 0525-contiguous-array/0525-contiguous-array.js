/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let obj={"0":-1};
    let max=0;
    let count=0;
    for(let i=0;i<nums.length;i++){
        count+=nums[i]==0?-1:1;
        let s=count+"";
        if(obj[count]!=undefined){
            max=Math.max(max,i-obj[count]);
        }else{
            obj[count]=i;
        }
        // console.log(obj,count,obj[count]);
    }
    return max;
};