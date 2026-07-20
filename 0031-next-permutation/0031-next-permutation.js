/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let tempI=-1;
    let tempA;
    let len=nums.length;
    let lastEle;
    for(let i=len-1;i>=0;i--){
        if(nums[i+1]&&nums[i]<nums[i+1]){
            console.log(nums[i],nums[i+1]);
            tempI=i;
            break;
        }
    }
    console.log(tempI," - tempI");
    if(tempI!=-1)tempA=nums.splice(tempI);
    if(tempI===-1){
        let i=0;
        let j=nums.length-1;
        while(i<j){
            let swap=nums[i];
            nums[i]=nums[j];
            nums[j]=swap;
            i++;
            j--;
        }
        return nums;
    }
    let smallest=Infinity;
    let smallestI=-1;
    for(let i=1;i<tempA.length;i++){
        if(tempA[i]>tempA[0]&&smallest>tempA[i]){
            smallest=tempA[i];
            smallestI=i;
        }
    }
    let swap=tempA[0];
    tempA[0]=tempA[smallestI];
    tempA[smallestI]=swap;
    nums.push(tempA.shift());
    tempA.sort((a,b)=>a-b);
    nums.push(...tempA);
    // console.log(tempA,tempI,nums,smallest,smallestI);
    return nums;
};