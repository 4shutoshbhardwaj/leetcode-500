/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1,nums2) {
    let stack=[];
    let obj={};
    for(let i=0;i<nums2.length;i++){
        while(stack.length>0&&nums2[i]>stack[stack.length-1]){
            let num=stack.pop();
            obj[num]=nums2[i];
        }
        stack.push(nums2[i]);
    }
    while(stack.length>0){
        obj[stack.pop()]=-1;
    }
    let ans=[];
    for(let i=0;i<nums1.length;i++){
        ans.push(obj[nums1[i]]);
    }
    return ans;
};