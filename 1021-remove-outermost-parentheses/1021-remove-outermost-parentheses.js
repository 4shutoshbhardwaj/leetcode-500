/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let count=0;
    let arr=[];
    let ss="";
    for(let i=0;i<s.length;i++){
        if(s[i]=="("){
            count++;
            ss+=s[i];
        }else{
            count--;
            ss+=s[i];
        }
        if(count==0){
            arr.push(ss.slice(1,ss.length-1));
            ss="";
        }
    }
    return arr.reduce((acc,a)=>acc+a,"");
};