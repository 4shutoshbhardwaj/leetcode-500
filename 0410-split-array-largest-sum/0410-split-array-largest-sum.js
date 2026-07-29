/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function(nums, k) {
    var l=Math.max(...nums);
    var r=nums.reduce((acc,a)=>acc+a,0);
    while(l<r){
        var m=Math.floor((r-l)/2)+l;
        var count=1;
        var sum=0;
        for(var i=0;i<nums.length;i++){
            if((sum+nums[i])>m){
                count++;
                sum=nums[i];
            }else{
                sum+=nums[i];
            }
        }
        if(count>k){
            l=m+1;
        }else{
            r=m;
        }
    }
    // console.log(l,r);
    return l;
};