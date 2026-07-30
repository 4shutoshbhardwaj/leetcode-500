/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if(nums1.length>nums2.length)return findMedianSortedArrays(nums2,nums1);
    let i1=0;
    let j1=nums1.length;
    while(i1<=j1){
        let mid1=Math.floor((i1+j1)/2);
        let mid2=Math.floor((nums1.length+nums2.length+1)/2)-mid1;
        let l1=mid1==0?-Infinity:nums1[mid1-1];
        let r1=mid1==nums1.length?Infinity:nums1[mid1];
        let l2=mid2==0?-Infinity:nums2[mid2-1];
        let r2=mid2==nums2.length?Infinity:nums2[mid2];
        if(l1<=r2&&l2<=r1){
            if((nums1.length+nums2.length)%2==0){
                return(Math.max(l1,l2)+Math.min(r1,r2))/2;
            }
            return Math.max(l1,l2);
        }
        if(l1>r2){
            j1=mid1-1;
        }else{
            i1=mid1+1;
        }
    }
};