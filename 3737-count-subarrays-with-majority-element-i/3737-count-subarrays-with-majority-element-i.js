/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countMajoritySubarrays = function(nums, target) {

    let count=0;

    for(let len=1;len<=nums.length;len++){

        let targetCount=0;

        // first window
        for(let i=0;i<len;i++){
            if(nums[i]==target){
                targetCount++;
            }
        }

        if(targetCount*2>len){
            count++;
        }

        // slide window
        for(let i=len;i<nums.length;i++){

            // remove left element
            if(nums[i-len]==target){
                targetCount--;
            }

            // add right element
            if(nums[i]==target){
                targetCount++;
            }

            if(targetCount*2>len){
                count++;
            }
        }
    }

    return count;
};