/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function(nums) {
    let i=0;
    let j=0;
    let sum=0;
    let positiveMax=0;
    let negativeMax=0;
    while(j<nums.length){
        if(sum<0){
            sum=0;
        }else if(sum>0){
            sum+=nums[j];
            j++;
        }else if(sum==0&&nums[j]<0){
            j++;
        }else if(sum==0){
            sum+=nums[j];
            j++;
        }
        positiveMax=Math.max(positiveMax,sum);
    }
    j=0;
    sum=0;
    negativeMax=Infinity;
    while(j<nums.length){
        if(sum>0){
            sum=0;
        }else if(sum<0){
            sum+=nums[j];
            j++;
        }else if(sum==0&&nums[j]>0){
            j++;
        }else if(sum==0){
            sum+=nums[j];
            j++;
        }
        negativeMax=Math.min(negativeMax,sum);
    }
    // console.log(negativeMax,positiveMax);
    negativeMax=Math.abs(negativeMax);
    if(negativeMax>positiveMax)return negativeMax;
    else return positiveMax;
};