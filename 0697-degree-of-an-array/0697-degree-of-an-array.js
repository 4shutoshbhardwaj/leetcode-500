/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let obj={};
    let max=0;
    let idx=-1;
    let freq={};
    for(let i=0;i<nums.length;i++){
        if(obj[nums[i]]==undefined){
            obj[nums[i]]=1;
            freq[nums[i]]=[i];
        }else{
            obj[nums[i]]++;
            freq[nums[i]][1]=i;
            if(max<obj[nums[i]]){
                max=obj[nums[i]];
                idx=i;
            }
        }
    }
    if(idx==-1)return 1;
    let min=Infinity;
    for(let i in obj){
        if(obj[i]==max){
            min=Math.min(min,freq[i][1]-freq[i][0]+1)
        }
    }
    // console.log(min,freq,max);
    return min;
};