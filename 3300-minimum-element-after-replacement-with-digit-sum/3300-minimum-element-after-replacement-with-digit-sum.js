/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
    let max=Infinity;
    for(let i=0;i<nums.length;i++){
        let sum=0;
        let str=""+nums[i];
        let arr=str.split("");
        // if(arr.length<=1)return arr;
        // console.log(str,arr)
        for(let j=0;j<arr.length;j++){
            sum+=(+(arr[j]));
        }
        if(sum<max){
            max=sum;
        }
    }
    // console.log(max);
    // return max;
    return max;
};