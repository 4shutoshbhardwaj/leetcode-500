/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(nums) {
    let st=[];
    let lnse=[];
    for(let i=0;i<nums.length;i++){
        while(st.length>0&&nums[st[st.length-1]]>=nums[i]){
            st.pop();
        }
        if(st.length==0){
            lnse.push(-1);
        }else{
            lnse.push(st[st.length-1]);
        }
        st.push(i);
    }
    st=[];
    let rnse=[];
    for(let i=nums.length-1;i>=0;i--){
        while(st.length>0&&nums[st[st.length-1]]>=nums[i]){
            st.pop();
        }
        if(st.length==0){
            rnse[i]=nums.length;
        }else{
            rnse[i]=st[st.length-1];
        }
        st.push(i);
    }
    let max=-Infinity;
    for(let i=0;i<nums.length;i++){
        let s=(rnse[i]-lnse[i]-1)*nums[i];
        // console.log(i,"-",lnse[i],"*",rnse[i],"-",i,"->",s);
        max=Math.max(max,s);
    }
    // console.log(lnse,rnse,max);
    return max;
};