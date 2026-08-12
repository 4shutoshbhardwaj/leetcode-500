/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
    let st=[];
    let lse=[];
    let rse=[];
    for(let i=0;i<arr.length;i++){
        while(arr[st[st.length-1]]>arr[i]){
            st.pop();
        }
        if(st.length==0){
            lse.push(-1);
        }else{
            lse.push(st[st.length-1]);
        }
        st.push(i);
    }
    st=[];
    for(let i=arr.length-1;i>=0;i--){
        while(arr[st[st.length-1]]>=arr[i]){
            st.pop();
        }
        if(st.length==0){
            rse.unshift(arr.length);
        }else{
            rse.unshift(st[st.length-1]);
        }
        st.push(i);
    }
    let sum=0;
    for(let i=0;i<lse.length;i++){
        let s=(i-lse[i])*(rse[i]-i);
        sum+=(s*arr[i]);
        // console.log((i-lse[i])," mul ",(rse[i]-i)," -> ",(s*arr[i]),"",sum);
    }
    // console.log(lse,rse,sum);
    return sum%1000000007;
};