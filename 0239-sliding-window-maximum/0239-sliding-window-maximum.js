/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let st=[];
    let ans=[];
    let i=0;
    for(let j=0;j<nums.length;j++){
        while(nums[st[st.length-1]]<=nums[j]){
            st.pop();
        }
        st.push(j);
        if(st[0]<i){
            st.shift();
        }
        if(j>=k-1){
            ans.push(nums[st[0]]);
            i++;
        }
    }
    return ans;
}