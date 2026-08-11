/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1,nums2) {
    let st=[nums2[0]];
    let obj={};
    for(let i=1;i<nums2.length;i++){
        // console.log(st,obj,st[st.length-1],nums2[i]);
            while(st[st.length-1]<nums2[i]&&st.length>0){
                obj[st[st.length-1]]=nums2[i];
                st.pop();
            }
        st.push(nums2[i]);
    }
    while(st.length>0){
        obj[st[st.length-1]]=-1;
        st.pop();
    }
    for(let i=0;i<nums1.length;i++){
        nums1[i]=obj[nums1[i]];
    }
    return nums1;
};