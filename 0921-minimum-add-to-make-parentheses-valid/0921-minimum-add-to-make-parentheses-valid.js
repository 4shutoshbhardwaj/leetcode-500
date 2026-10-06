/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let st=[];
    let ans=0;
    for(let i=0;i<s.length;i++){
        if(s[i]=="("){
            st.push(s[i]);
        }else{
            if(st.length>0){
                st.pop();
            }else{
                ans++;
            }
        }
    }
    ans+=st.length;
    return ans;
};