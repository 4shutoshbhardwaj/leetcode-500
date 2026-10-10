/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k1
 * @param {number} k2
 * @return {number}
 */
var minSumSquareDiff = function(nums1, nums2, k1, k2) {
    let arr=[];
    let total=0;
    for(let i=0;i<nums1.length;i++){
        arr.push(Math.abs(nums1[i]-nums2[i]));
        total+=arr[arr.length-1];
    }
    if(total<(k1+k2))return 0;
    arr.sort((a,b)=>b-a);
    let k=k1+k2;
    let nums=Array(arr[0]+1).fill(0);
    for(let i=0;i<arr.length;i++){
        nums[arr[i]]++;
    }
    // console.log(nums);
    let i=nums.length-1;
    while(i>=0&&k>0){
        if(nums[i]==0){
            i--;
            continue;
        }
        let move=Math.min(k,nums[i]);
        nums[i]-=move;
        nums[i-1]+=move;
        k-=move;
        if(nums[i]>0)break;
        i--;
    }
    arr=[];
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=0){
            let temp=nums[i];
            while(temp>0){
                arr.push(i);
                temp--;
            }
        }
    }
    // console.log(arr);
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=(arr[i]*arr[i]);
    }
    return sum;
};