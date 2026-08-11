/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    nums=[...nums,...nums];
    let st=[];
    let obj={};
    for(let i=0;i<nums.length;i++){
        while(st[st.length-1]<nums[i]&&st.length>0){
            if(obj[st[st.length-1]]==undefined){
                obj[st[st.length-1]]=[nums[i]];
            }else{
                obj[st[st.length-1]].push(nums[i]);
            }
            st.pop();
        }
        st.push(nums[i]);
        // console.log(st);
    }
    // console.log(obj,st);
    let ans=[];
    for(let i=0;i<Math.floor(nums.length/2);i++){
        if(obj[nums[i]]==undefined){
            ans.push(-1);
        }else{
            if(obj[nums[i]].length>1){
                ans.push(obj[nums[i]][0]);
                obj[nums[i]].shift();
            }else{
                ans.push(obj[nums[i]][0]);
            }
        }
    }
    // console.log(ans);
    return ans;
};