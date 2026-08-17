/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let n=1;
    nums.sort((a,b)=>a-b);
    let arr=[];
    let i=0;
    while(i<nums.length){
        if(nums[i]!=n&&nums[i]<n){
            i++;
        }else if(nums[i]==n){
            i++;
            n++;
        }else if(nums[i]!=n&&nums[i]>n){
            arr.push(n);
            n++;
        }
    }
    while(n<=nums.length){
        arr.push(n);
        n++;
    }
    return arr;
};