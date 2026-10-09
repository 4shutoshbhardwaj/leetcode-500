/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
    let st=[];
    let count=0;
    let i=0;
    while(i<s.length){
        if(s[i]=="("){
            st.push(2);
        }else{
            if(i+1<s.length&&s[i+1]==")"){
                i++;
            }else{
                count++;
            }
            if(st.length>0){
                st.pop();
            }else{
                count++;
            }
        }
        i++;
    }
    while(st.length>0){
        count+=st.pop();
    }
    return count;
};