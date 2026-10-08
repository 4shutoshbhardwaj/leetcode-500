/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countMajoritySubarrays = function(nums, target) {
    let count=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]==target){
            count++;
        }
    }
    for(let i=1;i<nums.length;i++){
        let tarCount=0;
        let k=0;
        let j=0;
        while(k<=i){
            if(nums[k]==target){
                tarCount++;
            }
            k++;
            continue;
        }
        if(tarCount*2>i+1){
            count++;
        }
        // console.log(obj,j,k,i,"count->",count);
        while(k<nums.length){
            if(nums[j]==target){
                tarCount--;
            }
            j++;
            if(nums[k]==target){
                tarCount++;
            }
            k++;
            if(tarCount*2>i+1){
                count++;
            }
        }
    }
    return count;
};