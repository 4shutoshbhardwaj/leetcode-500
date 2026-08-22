/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isTrionic = function(nums) {
    // let flagCount=0;
    // let t=true;
    // let count=0;
    // if(nums[0]>=nums[1])return false;
    // for(let i=1;i<nums.length-1;i++){
    //     // console.log(count,flagCount,nums[i],nums[i+1],t);
    //     if(nums[i]>nums[i+1]&&nums[i]>nums[i-1]&&t){
    //         flagCount++;
    //         count++;
    //         t=false;
    //     }else if(nums[i]<nums[i+1]&&nums[i]<nums[i-1]&&!t){
    //         flagCount--;
    //         count++;
    //         t=true;
    //     }
    // }
    // if(nums[nums.length-2]>=nums[nums.length-1])return false;

    // if(flagCount==0&&count==2)return true
    // // else return false;
    // return false;
    // // return count==2?true:false;



    let i=0;

    while(i+1<nums.length&&nums[i]<nums[i+1]){
        i++;
    }

    if(i==0){
        return false;
    }

    while(i+1<nums.length&&nums[i]>nums[i+1]){
        i++;
    }

    if(i==nums.length-1){
        return false;
    }

    while(i+1<nums.length&&nums[i]<nums[i+1]){
        i++;
    }

    return i==nums.length-1;
};