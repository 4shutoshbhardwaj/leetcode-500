/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let st=[];
    for(let i=0;i<s.length;i++){
        if(s[i]=="("||s[i]=="{"||s[i]=="["){
            st.push(s[i]);
        }else if(s[i]==")"&&st[st.length-1]=="("){
            st.pop();
        }else if(s[i]=="}"&&st[st.length-1]=="{"){
            st.pop();
        }else if(s[i]=="]"&&st[st.length-1]=="["){
            st.pop();
        }else if((s[i]==")"||s[i]=="}"||s[i]=="]")&&st.length==0){
            return false;
        }else{
            return false;
        }
    }
    if(st.length==0)return true;
    return false;
};