/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let arr=[];
    for(var i=0;i<nums.length;i++){
        arr.push([nums[i],i]);
    }
    arr.sort((a,b)=>a[0]-b[0]);
    let l=0;
    let r=nums.length-1;
    while(l<r){
        if(arr[l][0]+arr[r][0]==target){
            return [arr[l][1],arr[r][1]];
        }
        if(arr[l][0]+arr[r][0]>target){
            r--;
        }else{
            l++;
        }
    }
};