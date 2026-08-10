/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {
    let obj={};
    for(let i=0;i<nums2.length;i++){
        let s=nums2[i];
        if(obj[s]==undefined){
            obj[s]=1;
        }
    }
    let count1=0;
    for(let i=0;i<nums1.length;i++){
        let s=nums1[i];
        if(obj[s]){
            count1++;
        }
    }
    obj={};
    for(let i=0;i<nums1.length;i++){
        let s=nums1[i];
        if(obj[s]==undefined){
            obj[s]=1;
        }
    }
    let count2=0;
    for(let i=0;i<nums2.length;i++){
        let s=nums2[i];
        if(obj[s]){
            count2++;
        }
    }
    return [count1,count2];
};