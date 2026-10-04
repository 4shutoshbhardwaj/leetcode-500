/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let st=[];
    let star=[];
    let j=0;
    for(let i=0;i<s.length;i++){
        if(s[i]=="("){
            st.push(i);
        }else if(s[i]==")"&&st.length>0){
            st.pop();
        }else if(s[i]=="*"){
            star.push(i);
        }else if(s[i]==")"&&star.length>0){
            star.pop();
        }else return false;
        // console.log("+++",st.length,s,st,star,"---");
        j++;
    }
    while(st.length>0&&star.length>0){
        if(st[st.length-1]<star[star.length-1]){
            st.pop();
            star.pop();
        }else{
            return false;
        }
    }
    // console.log(st.length,s,s.length,st,star,j);
    return st.length==0;
};