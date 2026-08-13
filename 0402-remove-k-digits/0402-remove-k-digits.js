/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(nums, k) {
    if(nums.length==k)return "0";
    let st=[];
    let n=nums.length;
    for(let i=0;i<n;i++){
        while(st[st.length-1]>nums[i]&&k>0){
            st.pop();
            k--;
        }
        st.push(nums[i]);
    }
    st.splice(st.length-k,k);
    let s=st.join("").replace(/^0+/,"");
    return s==""?"0":s;
};