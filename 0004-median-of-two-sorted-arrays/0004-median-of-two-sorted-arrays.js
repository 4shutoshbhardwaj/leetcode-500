/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var arr=[];
    var i=0;
    var j=0;
    while(i<nums1.length&&j<nums2.length){
        if(nums1[i]<nums2[j]){
            arr.push(nums1[i]);
            i++;
        }else if(nums1[i]>nums2[j]){
            arr.push(nums2[j]);
            j++;
        }else{
            arr.push(nums1[i]);
            i++;
            arr.push(nums2[j]);
            j++;
        }
    }
    while(i<nums1.length){
        arr.push(nums1[i]);
        i++;
    }
    while(j<nums2.length){
        arr.push(nums2[j]);
        j++;
    }
    if(arr.length%2==0){
        return (arr[arr.length/2]+arr[(arr.length/2)-1])/2;
    }else{
        return arr[Math.floor(arr.length/2)];
    }
};