/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(nums, k) {
    let st=[];
    let n=nums.length;
    if(n<=k)return "0";
    for(let i=0;i<n;i++){
        while(st[st.length-1]>nums[i]&&k>0&&st.length){
            st.pop();
            k--;
        }
        st.push(nums[i]);
    }
    st.splice(st.length-k,k);
    const s=st.join("").replace(/^0+/,"");
    return s==""?"0":s;
};