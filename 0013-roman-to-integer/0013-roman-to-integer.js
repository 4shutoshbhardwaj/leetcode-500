/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let obj={
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
    };
    let num=0;
    let idx;
    for(let i=0;i<s.length-1;i++){
        if(obj[s[i]]>=obj[s[i+1]]){
            num+=obj[s[i]];
            idx=i;
        }else if(obj[s[i]]<obj[s[i+1]]){
            num+=(obj[s[i+1]]-obj[s[i]]);
            i++;
            idx=i;
        }
    }
    if(idx!=s.length-1){
        num+=obj[s[s.length-1]];
    }
    return num;
};