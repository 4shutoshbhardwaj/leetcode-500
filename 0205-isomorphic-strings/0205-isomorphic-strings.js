/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let obj1={};
    let obj2={};
    for(let i=0;i<s.length;i++){
        let s1=s[i];
        let s2=t[i];
        if(obj1[s1]==undefined&&obj2[s2]==undefined){
            obj1[s1]=s2;
            obj2[s2]=s1;
        }else if(obj1[s1]!=s2||obj2[s2]!=s1){
            return false;
        }
    }
    return true;
};