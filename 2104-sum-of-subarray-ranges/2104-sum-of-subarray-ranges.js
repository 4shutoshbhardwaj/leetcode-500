/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function(arr) {
    let st=[];
    let lse=[];
    let rse=[];
    for(let i=0;i<arr.length;i++){
        while(st.length>0&&arr[st[st.length-1]]<arr[i]){
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
        while(st.length>0&&arr[st[st.length-1]]<=arr[i]){
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
    st=[];
    lse=[];
    rse=[];
    for(let i=0;i<arr.length;i++){
        while(st.length>0&&arr[st[st.length-1]]>arr[i]){
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
        while(st.length>0&&arr[st[st.length-1]]>=arr[i]){
            st.pop();
        }
        if(st.length==0){
            rse.unshift(arr.length);
        }else{
            rse.unshift(st[st.length-1]);
        }
        st.push(i);
    }
    let sum2=0;
    for(let i=0;i<lse.length;i++){
        let s=(i-lse[i])*(rse[i]-i);
        sum2+=(s*arr[i]);
        // console.log((i-lse[i])," mul ",(rse[i]-i)," -> ",(s*arr[i]),"",sum2);
    }
    // console.log(sum,sum2);
    return sum-sum2;
};