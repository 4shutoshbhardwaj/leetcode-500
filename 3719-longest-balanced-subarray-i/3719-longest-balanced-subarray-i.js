/**
 * @param {number[]} nums
 * @return {number}
 */
var longestBalanced = function(nums) {
    let max=0;
    for(let i=0;i<nums.length;i++){
        let obj={};
        let odd=0;
        let even=0;
        for(let j=i;j<nums.length;j++){
            if(obj[nums[j]]==undefined){
                if(nums[j]%2==0){
                    even++;
                }else if(nums[j]%2!=0){
                    odd++;
                }
                obj[nums[j]]=1;
            }else{
                obj[nums[j]]++;
            }
            if(odd==even)max=Math.max(max,j-i+1);
        }
    }
    return max;
};