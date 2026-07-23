/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let maxSum=-Infinity;
    for(let i=0;i<nums.length;i++){
        let temp=1;
        for(let j=i;j<nums.length;j++){
            temp=temp*nums[j];
            if(temp>maxSum){
                maxSum=temp;
            }
        }
    }
    return maxSum;
};

// 1,-2,3,-4,5,-6,7,-8,9,10,23,100,1000