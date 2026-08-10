/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let ans=[];
    for(let i=0;i<nums1.length;i++){
        let temp=[...nums2];
        let val=-1;
        while(temp.length>0){
            let num=temp.pop();
            if(num>nums1[i]){
                val=num;
            }
            if(num==nums1[i]){
                ans.push(val);
                break;
            }
        }
    }
    // console.log(ans);
    return ans;
};