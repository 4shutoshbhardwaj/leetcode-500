/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let st=[];
    let str="";
    for(let i=0;i<s.length;i++){
        if(s[i]=="("&&st.length==0){
            st.push(s[i]);
        }else if(s[i]=="("&&st.length>0){
            st.push(s[i]);
            str+=s[i];
        }else if(s[i]==")"&&st.length>1){
            st.pop();
            str+=s[i];
        }else if(s[i]==")"&&st.length==1){
            st.pop();
        }
    }
    return str;
};